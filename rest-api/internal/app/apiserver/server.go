package apiserver

import (
	"encoding/json"
	"net/http"

	"github.com/ayoz4/next-js-project/rest-api/internal/app/model"

	"github.com/ayoz4/next-js-project/rest-api/internal/app/store"
	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
)

type server struct {
	router *mux.Router
	logger *logrus.Logger
	store  store.Store
}

func newServer(store store.Store) *server {
	s := &server{
		router: mux.NewRouter(),
		logger: logrus.New(),
		store:  store,
	}

	s.configureRouter()

	return s
}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

func (s *server) configureRouter() {
	s.router.HandleFunc("/goods", s.handleGoodsCreate()).Methods("POST")
	s.router.HandleFunc("/goods/{id}", s.handleGetGood()).Methods("GET")
	s.router.HandleFunc("/goods", s.handleGetGoods()).Methods("GET")
	s.router.HandleFunc("/goods/{id}", s.handleDeleteGood()).Methods("DELETE")
	s.router.HandleFunc("/goods", s.handleUpdateGood()).Methods("PUT")
}

func (s *server) handleGoodsCreate() http.HandlerFunc {
	type request struct {
		Name        string `json:"name"`
		Description string `json:"description`
		Price       int    `json:"price"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		req := &request{}
		if err := json.NewDecoder(r.Body).Decode(req); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		g := &model.Good{
			Name:        req.Name,
			Description: req.Description,
			Price:       req.Price,
		}
		if err := s.store.Good().Create(g); err != nil {
			s.error(w, r, http.StatusUnprocessableEntity, err)
			return
		}

		s.respond(w, r, http.StatusCreated, g)
	}
}

func (s *server) handleGetGood() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		gId := vars["id"]

		g, err := s.store.Good().GetGood(gId)
		if err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		s.respond(w, r, http.StatusOK, g)
	}
}

func (s *server) handleGetGoods() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		goods := s.store.Good().GetGoods()
		if len(goods) < 0 {
			s.error(w, r, http.StatusNotFound, nil)
			return
		}

		s.respond(w, r, http.StatusOK, goods)
	}
}

func (s *server) handleDeleteGood() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		gId := vars["id"]

		if err := s.store.Good().DeleteGood(gId); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		s.respond(w, r, http.StatusOK, gId)
	}
}

func (s *server) handleUpdateGood() http.HandlerFunc {
	type request struct {
		ID          string `json:"id"`
		Name        string `json:"name"`
		Description string `json:"description`
		Price       int    `json:"price"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		req := &request{}
		if err := json.NewDecoder(r.Body).Decode(req); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		g := &model.Good{
			ID:          req.ID,
			Name:        req.Name,
			Description: req.Description,
			Price:       req.Price,
		}
		if err := s.store.Good().UpdateGood(g); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}
	}
}

func (s *server) error(w http.ResponseWriter, r *http.Request, code int, err error) {
	s.respond(w, r, code, map[string]string{"error": err.Error()})
}

func (s *server) respond(w http.ResponseWriter, r *http.Request, code int, data interface{}) {
	w.WriteHeader(code)
	if data != nil {
		json.NewEncoder(w).Encode(data)
	}
}
