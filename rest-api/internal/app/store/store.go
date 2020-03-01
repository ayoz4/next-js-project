package store

import (
	"context"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

type Store struct {
	client         *firestore.Client
	goodRepository *GoodRepository
}

func New() *Store {
	return &Store{}
}

func (s *Store) Open() error {
	ctx := context.Background()
	sa := option.WithCredentialsFile("/Users/roman/Documents/server/next-js-project/rest-api/internal/app/store/ikit-is-firebase-adminsdk-rexhu-6803f65b58.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		return err
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		return err
	}

	s.client = client

	return nil
}

func (s *Store) Close() {
	s.client.Close()
}

func (s *Store) Good() *GoodRepository {
	if s.goodRepository != nil {
		return s.goodRepository
	}

	s.goodRepository = &GoodRepository{
		store: s,
	}

	return s.goodRepository
}
