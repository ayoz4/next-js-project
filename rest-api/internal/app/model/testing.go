package model

import (
	"testing"
)

func TestGood(t *testing.T) *Good {
	return &Good{
		Name:        "goodName",
		Description: "goodDescription",
		Price:       500,
	}
}
