package main

import (
	"flag"
	"log"

	"github.com/BurntSushi/toml"

	"github.com/ayoz4/next-js-project/internal/app/apiserver"
)

/* func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/goods", AllGoods).Methods("GET")
	myRouter.HandleFunc("/goods", NewGood).Methods("POST")
	myRouter.HandleFunc("/goods", DeleteGood).Methods("DELETE")
	myRouter.HandleFunc("/goods", UpdateGood).Methods("PUT")
	myRouter.HandleFunc("/goods/{id}", GetGood).Methods("GET")
	log.Fatal(http.ListenAndServe(":8081", myRouter))
} */

var (
	configPath string
)

func init() {
	flag.StringVar(&configPath, "config-path", "configs/apiserver.toml", "path to config file")
}

func main() {
	// handleRequests()
	flag.Parse()

	config := apiserver.NewConfig()
	_, err := toml.DecodeFile(configPath, config)
	if err != nil {
		log.Fatal(err)
	}

	s := apiserver.New(config)
	if err := s.Start(); err != nil {
		log.Fatal(err)
	}
}
