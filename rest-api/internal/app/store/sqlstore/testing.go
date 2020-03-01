package sqlstore

import (
	"context"
	"testing"

	firebase "firebase.google.com/go"
	"google.golang.org/api/option"

	"cloud.google.com/go/firestore"
)

func TestDB(t *testing.T) (*firestore.Client, func()) {
	t.Helper()

	ctx := context.Background()
	sa := option.WithCredentialsFile("/Users/roman/Documents/server/next-js-project/rest-api/internal/app/store/ikit-is-firebase-adminsdk-rexhu-6803f65b58.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		t.Fatal(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		t.Fatal(err)
	}

	defer client.Close()

	return client, func() {}
}
