package teststore

import (
	"strconv"

	"github.com/ayoz4/next-js-project/rest-api/internal/app/store"

	"github.com/ayoz4/next-js-project/rest-api/internal/app/model"
)

type GoodRepository struct {
	store *Store
	goods map[string]*model.Good
}

func (r *GoodRepository) Create(g *model.Good) error {
	if err := g.Validate(); err != nil {
		return nil
	}

	r.goods[g.Name] = g
	g.ID = strconv.Itoa(len(r.goods))

	return nil
}

func (r *GoodRepository) GetGood(id string) (*model.Good, error) {
	g, ok := r.goods[id]
	if !ok {
		return nil, store.ErrDocNotFound
	}

	return g, nil
}
