package apiserver

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/ayoz4/next-js-project/internal/app/store/teststore"
	"github.com/bmizerany/assert"
)

func TestServer_HandlerGoodsCreate(t *testing.T) {
	rec := httptest.NewRecorder()
	req, _ := http.NewRequest(http.MethodPost, "/goods", nil)
	s := newServer(teststore.New())
	s.ServeHTTP(rec, req)
	assert.Equal(t, rec.Code, http.StatusOK)
}
