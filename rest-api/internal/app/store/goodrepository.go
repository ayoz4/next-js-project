package store

import (
	"context"

	"github.com/ayoz4/next-js-project/internal/app/model"
)

type GoodRepository struct {
	store *Store
}

func (r *GoodRepository) Create(g *model.Good) (*model.Good, error) {
	if err := g.Validate(); err != nil {
		return nil, err
	}

	_, _, err := r.store.client.Collection("goods").Add(context.Background(), g)
	if err != nil {
		return nil, err
	}

	return g, nil
}

func (r *GoodRepository) GetGood(id string) (*model.Good, error) {
	g := &model.Good{}
	result, err := r.store.client.Collection("goods").Doc(id).Get(context.Background())
	if err != nil {
		return nil, err
	}

	g = fromMapToStruct(g, result.Data(), result.Ref.ID)

	return g, nil
}

func fromMapToStruct(g *model.Good, gm map[string]interface{}, id string) *model.Good {
	g.ID = id
	g.Name = gm["name"].(string)
	g.Description = gm["description"].(string)
	g.Price = gm["Price"].(int)

	return g
}
