import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default localStorage
import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import axios from "axios";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user:  userReducer,
  cart: cartReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: [],
      },
    }),
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

export const persistor = persistStore(store);
