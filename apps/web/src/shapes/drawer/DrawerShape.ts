import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesShakaShape } from "@shaka-web-shapes/store";

export type TypesDrawerShapeThread = "root";

export type TypesDrawerShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesDrawerShapeThread | "";
  //
  // shape type map DrawerShape
  //

  visible: boolean;
};

export type TypesDrawerShape = {
  value: TypesDrawerShapeValue;
};

const initialState: TypesDrawerShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial DrawerShape
    //

    visible: false,
  },
};

export const DrawerShapeSlice = createSlice({
  name: "DrawerShape",
  initialState,
  reducers: {
    initDrawerShape: (state) => {
      state.value = initialState.value;
    },

    writeDrawerShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeDrawerShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeDrawerShapeInverseTrue: (
      state,
      action: PayloadAction<TypesDrawerShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeDrawerShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions DrawerShape
    //

    writeDrawerShapeVisibleToggle: (state) => {
      state.value = {
        ...state.value,
        visible: !state.value.visible,
      };
    },
  },
});

export const {
  initDrawerShape,
  writeDrawerShapeEntracteTrue,
  writeDrawerShapeEntracteFalse,
  writeDrawerShapeInverseTrue,
  writeDrawerShapeInverseFalse,
  //
  // shape library DrawerShape
  //
  writeDrawerShapeVisibleToggle,
} = DrawerShapeSlice.actions;

export const ofDrawerShape = (state: TypesShakaShape): TypesDrawerShapeValue =>
  state.DrawerShape.value;
export default DrawerShapeSlice.reducer;
