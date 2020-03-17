package apiserver

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/sessions"

	"github.com/ayoz4/next-js-project/internal/app/model"

	"github.com/ayoz4/next-js-project/internal/app/store"
	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
)

const (
	jwtKey      = "secretkey"
	sessionName = "ikit"
)

type server struct {
	router       *mux.Router
	logger       *logrus.Logger
	store        store.Store
	sessionStore sessions.Store
}

func newServer(store store.Store, sessionStore sessions.Store) *server {
	s := &server{
		router:       mux.NewRouter(),
		logger:       logrus.New(),
		store:        store,
		sessionStore: sessionStore,
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
	s.router.HandleFunc("/sessions", s.handleSessionsCreate()).Methods("POST")
}

func (s *server) handleSessionsCreate() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Set-Cookie")

		session, err := s.sessionStore.Get(r, sessionName)
		if err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
			return
		}

		session.Values["id"] = "lol"
		/* if err := s.sessionStore.Save(r, w, session); err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
			return
		} */
		s.sessionStore.Save(r, w, session)

		str := session.Values["id"]

		s.respond(w, r, http.StatusOK, str)

		/* token := jwt.NewWithClaims(jwt.SigningMethodES256, jwt.MapClaims{
			"foo": "test",
		})

		fmt.Println(token)

		tokenString, err := token.SignedString([]byte("secretword"))
		if err != nil {
			return
		}

		fmt.Println(tokenString)

		cookie := &http.Cookie{
			Name:  "usertoken",
			Value: tokenString,
		}

		http.SetCookie(w, cookie)

		s.respond(w, r, http.StatusOK, nil) */
	}
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

		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Content-Type", "application/json")
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
