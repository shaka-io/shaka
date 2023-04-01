import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesShakaShape } from "@shaka-team-shapes/store";
import { TypesShakaBasisKeyOpts } from "@shaka-team-types/key/TypesShakaBasisKeyOpts";

export type TypesRootShapeThread = "root";

export type TypesRootShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesRootShapeThread | "";
  //
  // shape type map RootShape
  //

  basiskey: TypesShakaBasisKeyOpts;

  networkfound: boolean;
};

export type TypesRootShape = {
  value: TypesRootShapeValue;
};

const initialState: TypesRootShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial RootShape
    //
    basiskey: "root",

    networkfound: false,
  },
};

export const RootShapeSlice = createSlice({
  name: "RootShape",
  initialState,
  reducers: {
    initRootShape: (state) => {
      state.value = initialState.value;
    },

    writeRootShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeRootShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeRootShapeInverseTrue: (
      state,
      action: PayloadAction<TypesRootShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeRootShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions RootShape
    //

    writeRootShapeBasisKey: (
      state,
      action: PayloadAction<TypesShakaBasisKeyOpts>
    ) => {
      state.value = {
        ...state.value,
        basiskey: action.payload,
      };
    },

    writeRootShapeNetworkFound: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        networkfound: action.payload,
      };
    },
  },
});

export const {
  initRootShape,
  writeRootShapeEntracteTrue,
  writeRootShapeEntracteFalse,
  writeRootShapeInverseTrue,
  writeRootShapeInverseFalse,
  //
  // shape library RootShape
  //
  writeRootShapeBasisKey,
  writeRootShapeNetworkFound,
} = RootShapeSlice.actions;

export const ofRootShape = (state: TypesShakaShape): TypesRootShapeValue =>
  state.RootShape.value;
export default RootShapeSlice.reducer;
