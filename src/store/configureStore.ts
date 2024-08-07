import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (): { store: any; persistor: any } => {
  const store = configureStore({ reducer: persistedReducer });
  const persistor = persistStore(store);
  return { store, persistor };
};
