import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Store } from "redux";

import moBroReducer from "./moBro/mobroSlice";

const rootReducer = combineReducers({
  moBro: moBroReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export const store: Store<RootStateType> = configureStore({
  reducer: rootReducer,
});
