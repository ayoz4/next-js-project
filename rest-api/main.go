package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/goods", AllGoods).Methods("GET")
	myRouter.HandleFunc("/goods", NewGood).Methods("POST")
	myRouter.HandleFunc("/goods", DeleteGood).Methods("DELETE")
	myRouter.HandleFunc("/goods", UpdateGood).Methods("PUT")
	myRouter.HandleFunc("/goods/{id}", GetGood).Methods("GET")
	log.Fatal(http.ListenAndServe(":8081", myRouter))
}

func main() {
	handleRequests()
}
