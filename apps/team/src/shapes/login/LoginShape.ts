import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { classsteamshaka } from "@shaka-team-class/index";
import { TypesShakaShape } from "@shaka-team-shapes/store";
import { TypesLibraryBundles } from "@wavesrcool/library/lib/bundles/_types";

const { bundles } = classsteamshaka;

export type TypesLoginShapeBundles = {
  PrimaryCredential: TypesLibraryBundles;
  SecondaryPasscode: TypesLibraryBundles;
};

export type TypesLoginShapeView = "primary" | "secondary";

export type TypesLoginShapeThread = "root";

export type TypesLoginShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesLoginShapeThread | "";
  //
  // shape type map LoginShape
  //

  view: TypesLoginShapeView;

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
    view: `primary`,
    submitted: false,
    submittedTime: 0,
    bundles: {
      PrimaryCredential: bundles.reference,
      SecondaryPasscode: bundles.reference,
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

    writeLoginShapeView: (
      state,
      { payload }: PayloadAction<TypesLoginShapeView>
    ) => {
      state.value = {
        ...state.value,
        view: payload,
      };
    },

    writeLoginShapeBundlesPrimaryCredential: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const PrimaryCredential = bundles.cyclic.letters({
        bundle: state.value.bundles.PrimaryCredential,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          PrimaryCredential,
        },
      };
    },

    writeLoginShapeBundlesSecondaryPasscode: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const SecondaryPasscode = bundles.cyclic.letters({
        bundle: state.value.bundles.SecondaryPasscode,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          SecondaryPasscode,
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
  writeLoginShapeView,
  writeLoginShapeBundlesPrimaryCredential,
  writeLoginShapeBundlesSecondaryPasscode,
} = LoginShapeSlice.actions;

export const ofLoginShape = (state: TypesShakaShape): TypesLoginShapeValue =>
  state.LoginShape.value;
export default LoginShapeSlice.reducer;
