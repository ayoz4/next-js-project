package sqlstore

import (
	"cloud.google.com/go/firestore"
	"github.com/ayoz4/next-js-project/internal/app/store"
)

type Store struct {
	client         *firestore.Client
	goodRepository *GoodRepository
}

func New(client *firestore.Client) *Store {
	return &Store{
		client: client,
	}
}

func (s *Store) Good() store.GoodRepository {
	if s.goodRepository != nil {
		return s.goodRepository
	}

	s.goodRepository = &GoodRepository{
		store: s,
	}

	return s.goodRepository
}
