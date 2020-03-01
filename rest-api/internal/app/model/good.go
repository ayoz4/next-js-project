package model

import (
	validation "github.com/go-ozzo/ozzo-validation/v4"
)

// Good ...
type Good struct {
	ID          string `json:"id,omitempty"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Price       int    `json:"price"`
}

// Validate ...
func (g *Good) Validate() error {
	return validation.ValidateStruct(
		g,
		validation.Field(&g.Name, validation.Required, validation.Length(3, 100)),
		validation.Field(&g.Description, validation.Required, validation.Length(3, 500)),
		validation.Field(&g.Price, validation.Required),
	)
}
