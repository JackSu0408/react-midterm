import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage'; // 使用 localStorage
import cartReducer from './cartSlice';
import usersReducer from "./usersSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const usersPersistConfig = {
  key: "users",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedUsersReducer = persistReducer(usersPersistConfig, usersReducer);
// Part2: Combine Reducers and Create a Store
export const store = configureStore({
   reducer: {
     cart: persistedCartReducer,
     users: persistedUsersReducer,
     },
   devTools: process.env.NODE_ENV !== 'production',

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
 });

//  export store to global
export const persistor = persistStore(store);