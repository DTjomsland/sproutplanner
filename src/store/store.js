import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import activitySlice from "./slices/activitySlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const persisConfig = {
    key:"root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    category: categorySlice,
    activity: activitySlice,
})

const persistantReducer = persistReducer(persisConfig, reducer)

export const store = configureStore({
    reducer: persistantReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})