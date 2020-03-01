package store

import (
	"testing"
)

func TestStore(t *testing.T) (*Store, func()) {
	t.Helper()

	s := New()
	if err := s.Open(); err != nil {
		t.Fatal(err)
	}

	return s, func() {
		s.Close()
	}
}
