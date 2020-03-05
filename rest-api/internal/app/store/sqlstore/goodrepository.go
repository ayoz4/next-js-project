package sqlstore

import (
	"context"
	"encoding/json"
	"fmt"

	"google.golang.org/api/iterator"

	"github.com/ayoz4/next-js-project/rest-api/internal/app/store"

	"github.com/ayoz4/next-js-project/rest-api/internal/app/model"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type GoodRepository struct {
	store *Store
}

func (r *GoodRepository) Create(g *model.Good) error {
	if err := g.Validate(); err != nil {
		return err
	}

	_, _, err := r.store.client.Collection("goods").Add(context.Background(), map[string]interface{}{
		"name":        g.Name,
		"description": g.Description,
		"price":       g.Price,
	})
	if err != nil {
		return err
	}

	return nil
}

func (r *GoodRepository) GetGood(id string) (*model.Good, error) {
	g := &model.Good{}
	result, err := r.store.client.Collection("goods").Doc(id).Get(context.Background())
	if err != nil {
		if status.Code(err) == codes.NotFound {
			return nil, store.ErrDocNotFound
		}
		return nil, err
	}

	g = fromMapToStruct(result.Data(), result.Ref.ID)

	return g, nil
}

func (r *GoodRepository) GetGoods() []*model.Good {
	result := r.store.client.Collection("goods").Documents(context.Background())

	goods := make([]*model.Good, 0)

	for {
		doc, err := result.Next()
		if err == iterator.Done {
			break
		}

		g := fromMapToStruct(doc.Data(), doc.Ref.ID)
		goods = append(goods, g)
	}

	return goods
}

func (r *GoodRepository) DeleteGood(id string) error {
	_, err := r.store.client.Collection("goods").Doc(id).Delete(context.Background())
	if err != nil {
		return err
	}

	return nil
}

func (r *GoodRepository) UpdateGood(g *model.Good) error {
	doc, err := r.store.client.Collection("goods").Doc(g.ID).Get(context.Background())
	if err != nil {
		if status.Code(err) == codes.NotFound {
			return store.ErrDocNotFound
		}

		return err
	}

	ng, err := compareDocs(doc.Data(), g)
	if err != nil {
		return err
	}

	_, err = r.store.client.Collection("goods").Doc(g.ID).Set(context.Background(), map[string]interface{}{
		"name":        ng.Name,
		"description": ng.Description,
		"price":       ng.Price,
	})
	if err != nil {
		return err
	}

	return nil
}

func fromMapToStruct(gm map[string]interface{}, id string) *model.Good {
	g := &model.Good{
		ID:          id,
		Name:        gm["name"].(string),
		Description: gm["description"].(string),
		Price:       int(gm["price"].(int64)),
	}

	return g
}

func compareDocs(doc map[string]interface{}, g *model.Good) (*model.Good, error) {
	var interf map[string]interface{}
	inrec, _ := json.Marshal(g)
	json.Unmarshal(inrec, &interf)

	fmt.Println(g)

	delete(interf, "id")

	for key, value := range interf {
		if value == "" {
			delete(interf, key)
			interf[key] = doc[key]
		}
	}

	fmt.Println(interf)

	ng := &model.Good{}

	jsonMap, err := json.Marshal(interf)
	if err != nil {
		return nil, err
	}

	if err := json.Unmarshal(jsonMap, ng); err != nil {
		return nil, err
	}

	fmt.Println(ng)

	return ng, nil
}
