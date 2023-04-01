import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { classsteamshaka } from "@shaka-team-class/index";
import { TypesShakaShape } from "@shaka-team-shapes/store";
import { TypesLibraryBundles } from "@wavesrcool/library/lib/bundles/_types";

const { bundles } = classsteamshaka;

export type TypesLoginShapeBundles = {
  LoginPrimary: TypesLibraryBundles;
};

export type TypesLoginShapeThread = "root";

export type TypesLoginShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesLoginShapeThread | "";
  //
  // shape type map LoginShape
  //
  submitted: boolean;
  submittedTime: number;
  bundles: TypesLoginShapeBundles;
};

export type TypesLoginShape = {
  value: TypesLoginShapeValue;
};

const initialState: TypesLoginShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial LoginShape
    //
    submitted: false,
    submittedTime: 0,
    bundles: {
      LoginPrimary: bundles.reference,
    },
  },
};

export const LoginShapeSlice = createSlice({
  name: "LoginShape",
  initialState,
  reducers: {
    initLoginShape: (state) => {
      state.value = initialState.value;
    },

    writeLoginShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeLoginShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeLoginShapeInverseTrue: (
      state,
      action: PayloadAction<TypesLoginShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeLoginShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions LoginShape
    //
    writeLoginShapeSubmitted: (state, { payload }: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        submitted: payload,
      };
    },

    writeLoginShapeSubmittedTime: (state) => {
      const submittedTime = Date.now();
      state.value = {
        ...state.value,
        submittedTime,
      };
    },

    writeLoginShapeBundlesLoginPrimary: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const LoginPrimary = bundles.cyclic.letters({
        bundle: state.value.bundles.LoginPrimary,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          LoginPrimary,
        },
      };
    },
  },
});

export const {
  initLoginShape,
  writeLoginShapeEntracteTrue,
  writeLoginShapeEntracteFalse,
  writeLoginShapeInverseTrue,
  writeLoginShapeInverseFalse,
  //
  // shape library LoginShape
  //

  writeLoginShapeSubmitted,
  writeLoginShapeSubmittedTime,

  writeLoginShapeBundlesLoginPrimary,
} = LoginShapeSlice.actions;

export const ofLoginShape = (state: TypesShakaShape): TypesLoginShapeValue =>
  state.LoginShape.value;
export default LoginShapeSlice.reducer;
