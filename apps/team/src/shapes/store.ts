/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import LoginShape from "@shaka-team-shapes/login/LoginShape";
import RootShape from "@shaka-team-shapes/root/RootShape";

export function makeStore() {
  return configureStore({
    reducer: {
      RootShape,
      LoginShape,
    },
  });
}

const store = makeStore();

export type TypesShakaShape = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TypesShakaShape,
  unknown,
  Action<string>
>;

export default store;
