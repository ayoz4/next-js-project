package teststore

type Store struct {
	goodRepository *GoodRepository
}

func New() *Store {
	return &Store{}
}

// func (s *Store) Good() store.GoodRepository {
// 	if s.goodRepository != nil {
// 		// return s.goodRepository
// 	}

// 	s.goodRepository = &GoodRepository{
// 		store: s,
// 		goods: make(map[string]*model.Good),
// 	}

// 	return s.goodRepository
// }
