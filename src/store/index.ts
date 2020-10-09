import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Store } from "redux";

import hardwareReducer from "./hardware/hardwareSlice";

const rootReducer = combineReducers({
  hardware: hardwareReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export const store: Store<RootStateType> = configureStore({
  reducer: rootReducer,
});
