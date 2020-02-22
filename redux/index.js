import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

/* const persistConfig = {
  key: "root",
  storage: storage
}; */

// const persReducer = persistReducer(persistConfig, rootReducer);

export const initStore = (initialStore = {}) => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

// export let persistor = persistStore(initStore());
