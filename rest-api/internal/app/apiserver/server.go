package apiserver

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/handlers"
	"github.com/gorilla/sessions"

	"github.com/ayoz4/next-js-project/internal/app/model"

	"github.com/ayoz4/next-js-project/internal/app/store"
	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
)

const (
	sessionName        = "user"
	ctxKeyUser  ctxKey = iota
	ctxKeyRequestID
)

var (
	errNotAuthenticated = errors.New("not authenticated")
)

type ctxKey int8

type testUser struct {
	Name string `json:"name"`
}

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
	s.router.Use(s.setRequestID)
	s.router.Use(s.logRequest)
	s.router.Use(handlers.CORS(handlers.AllowCredentials()))
	s.router.Use(handlers.CORS(handlers.AllowedOrigins([]string{"http://localhost:3000"})))

	s.router.HandleFunc("/goods", s.handleGoodsCreate()).Methods("POST")
	s.router.HandleFunc("/goods/{id}", s.handleGetGood()).Methods("GET")
	s.router.HandleFunc("/goods", s.handleGetGoods()).Methods("GET")
	s.router.HandleFunc("/goods/{id}", s.handleDeleteGood()).Methods("DELETE")
	s.router.HandleFunc("/goods", s.handleUpdateGood()).Methods("PUT")
	s.router.HandleFunc("/sessions", s.handleSessionsCreate()).Methods("POST")

	private := s.router.PathPrefix("/private").Subrouter()
	private.Use(s.authenticateUser)
	private.HandleFunc("/whoami", s.handleWhoami()).Methods("GET")
}

func (s *server) setRequestID(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := uuid.New().String()
		w.Header().Set("X-Request-ID", id)
		next.ServeHTTP(w, r.WithContext(context.WithValue(r.Context(), ctxKeyRequestID, id)))
	})
}

func (s *server) logRequest(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		logger := s.logger.WithFields(logrus.Fields{
			"remote_addr": r.RemoteAddr,
			"request_id":  r.Context().Value(ctxKeyRequestID),
		})

		logger.Infof("started %s %s", r.Method, r.RequestURI)

		start := time.Now()
		next.ServeHTTP(w, r)

		logger.Info("completed in %v", time.Now().Sub(start))
	})
}

func (s *server) handleSessionsCreate() http.HandlerFunc {
	type response struct {
		Username string `json:"username"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		session, err := s.sessionStore.Get(r, sessionName)
		if err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
			return
		}

		session.Values["user_id"] = "roman"

		session.Options = &sessions.Options{
			MaxAge: 10,
			Secure: false,
		}

		err = s.sessionStore.Save(r, w, session)
		if err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
			return
		}

		res := &response{
			Username: "roman",
		}

		s.respond(w, r, http.StatusOK, res)
	}
}

func (s *server) authenticateUser(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		session, err := s.sessionStore.Get(r, sessionName)
		if err != nil {
			s.error(w, r, http.StatusInternalServerError, err)
			return
		}

		id, ok := session.Values["user_id"]
		if !ok {
			s.error(w, r, http.StatusUnauthorized, errNotAuthenticated)
			return
		}

		next.ServeHTTP(w, r.WithContext(context.WithValue(r.Context(), ctxKeyUser, id)))
	})
}

func (s *server) handleWhoami() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		s.respond(w, r, http.StatusOK, r.Context().Value(ctxKeyUser))
	}
}

func (s *server) handleGoodsCreate() http.HandlerFunc {
	type request struct {
		Name        string `json:"name"`
		Description string `json:"description"`
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
		gID := vars["id"]

		g, err := s.store.Good().GetGood(gID)
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
		gID := vars["id"]

		if err := s.store.Good().DeleteGood(gID); err != nil {
			s.error(w, r, http.StatusBadRequest, err)
			return
		}

		s.respond(w, r, http.StatusOK, gID)
	}
}

func (s *server) handleUpdateGood() http.HandlerFunc {
	type request struct {
		ID          string `json:"id"`
		Name        string `json:"name"`
		Description string `json:"description"`
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
