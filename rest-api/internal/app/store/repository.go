package store

import (
	"github.com/ayoz4/next-js-project/internal/app/model"
)

// UserRepository ...
type GoodRepository interface {
	Create(*model.Good) error
	GetGood(string) (*model.Good, error)
	GetGoods() []*model.Good
	DeleteGood(string) error
	UpdateGood(*model.Good) error
}
