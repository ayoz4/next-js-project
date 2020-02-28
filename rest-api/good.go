package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
)

func InitialMigrating() (*firestore.Client, context.Context) {
	ctx := context.Background()
	sa := option.WithCredentialsFile("C:/Users/goust/Desktop/ikit-is-firebase-adminsdk-rexhu-6803f65b58.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	return client, ctx
}

func AllGoods(w http.ResponseWriter, r *http.Request) {
	client, ctx := InitialMigrating()
	defer client.Close()

	result := client.Collection("goods").Documents(ctx)

	goods := make([]Good, 0)

	for {
		doc, err := result.Next()
		if err == iterator.Done {
			break
		}

		good := extractGoodData(doc.Data())

		goods = append(goods, good)
	}

	json.NewEncoder(w).Encode(goods)
}

type AddGood struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Price       int    `json:"price"`
}

func NewGood(w http.ResponseWriter, r *http.Request) {
	hasDoc := false

	client, ctx := InitialMigrating()
	defer client.Close()

	g := AddGood{}
	b, _ := ioutil.ReadAll(r.Body)

	err := json.Unmarshal(b, &g)
	if err != nil {
		log.Fatal("Error: ", err)
	}

	query := client.Collection("goods").Where("name", "==", g.Name).Documents(ctx)
	for {
		doc, err := query.Next()
		if err == iterator.Done {
			break
		}

		if doc != nil {
			hasDoc = true
		}
	}

	if hasDoc == false {
		_, _, err = client.Collection("goods").Add(ctx, map[string]interface{}{
			"name":        g.Name,
			"description": g.Description,
			"price":       g.Price,
		})
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			log.Println("An error has occured: %s", err)
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode("Success.")
	} else {
		w.WriteHeader(http.StatusBadGateway)
		json.NewEncoder(w).Encode("This document already exists/")
	}
}

func DeleteGood(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "DeleteGood endpoint hit")
}

func UpdateGood(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "UpdateGood endpoint hit")
}

func extractGoodData(g map[string]interface{}) (good Good) {
	good = Good{
		Name:        g["name"].(string),
		Description: g["description"].(string),
		Price:       g["price"].(int64),
	}

	return good
}

type Good struct {
	Name        string `firestore:"name,omitempty"`
	Description string `firestore:"description,omitempty"`
	Price       int64  `firestore:"price,omitempty"`
}
