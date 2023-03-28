/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import FundraiseShape from "@shaka-web-shapes/fundraise/FundraiseShape";
import RootShape from "@shaka-web-shapes/root/RootShape";
import DrawerShape from "./drawer/DrawerShape";

export function makeStore() {
  return configureStore({
    reducer: {
      RootShape,
      DrawerShape,
      FundraiseShape,
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
