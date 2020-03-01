package model_test

import (
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/ayoz4/next-js-project/internal/app/model"
)

func TestGood_Validate(t *testing.T) {
	testCases := []struct {
		name    string
		g       func() *model.Good
		isValid bool
	}{
		{
			name: "Valid",
			g: func() *model.Good {
				return model.TestGood(t)
			},
			isValid: true,
		},
		{
			name: "empty name",
			g: func() *model.Good {
				g := model.TestGood(t)
				g.Name = ""
				return g
			},
			isValid: false,
		},
		{
			name: "empty decription",
			g: func() *model.Good {
				g := model.TestGood(t)
				g.Description = ""
				return g
			},
			isValid: false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			if tc.isValid {
				assert.NoError(t, tc.g().Validate())
			} else {
				assert.Error(t, tc.g().Validate())
			}
		})
	}
}
