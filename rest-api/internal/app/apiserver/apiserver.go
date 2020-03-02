package apiserver

import (
	"context"
	"net/http"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"

	"github.com/ayoz4/next-js-project/internal/app/store/sqlstore"
)

func Start(config *Config) error {
	client, err := newDB()
	if err != nil {
		return err
	}
	defer client.Close()

	store := sqlstore.New(client)
	srv := newServer(store)

	return http.ListenAndServe(config.BindAddr, srv)
}

func newDB() (*firestore.Client, error) {
	ctx := context.Background()
	sa := option.WithCredentialsFile("/Users/roman/Documents/server/next-js-project/rest-api/internal/app/store/dbConnect.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		return nil, err
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		return nil, err
	}

	return client, nil
}
