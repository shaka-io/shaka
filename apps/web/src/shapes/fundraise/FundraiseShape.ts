import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesShakaShape } from "@shaka-web-shapes/store";

export type TypesFundraiseShapeMoneyKind = "btc" | "fiat";

export type TypesFundraiseShapeThread = "root";

export type TypesFundraiseShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesFundraiseShapeThread | "";
  //
  // shape type map FundraiseShape
  //

  moneykind: TypesFundraiseShapeMoneyKind;

  lninvoice: string;
};

export type TypesFundraiseShape = {
  value: TypesFundraiseShapeValue;
};

const initialState: TypesFundraiseShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial FundraiseShape
    //

    moneykind: `fiat`,
    lninvoice: ``,
  },
};

export const FundraiseShapeSlice = createSlice({
  name: "FundraiseShape",
  initialState,
  reducers: {
    initFundraiseShape: (state) => {
      state.value = initialState.value;
    },

    writeFundraiseShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeFundraiseShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeFundraiseShapeInverseTrue: (
      state,
      action: PayloadAction<TypesFundraiseShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeFundraiseShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions FundraiseShape
    //

    writeFundraiseShapeMoneyKind: (
      state,
      { payload }: PayloadAction<TypesFundraiseShapeMoneyKind>
    ) => {
      state.value = {
        ...state.value,
        moneykind: payload,
      };
    },

    writeFundraiseShapeLnInvoice: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        lninvoice: payload,
      };
    },
  },
});

export const {
  initFundraiseShape,
  writeFundraiseShapeEntracteTrue,
  writeFundraiseShapeEntracteFalse,
  writeFundraiseShapeInverseTrue,
  writeFundraiseShapeInverseFalse,
  //
  // shape library FundraiseShape
  //
  writeFundraiseShapeMoneyKind,
  writeFundraiseShapeLnInvoice,
} = FundraiseShapeSlice.actions;

export const ofFundraiseShape = (
  state: TypesShakaShape
): TypesFundraiseShapeValue => state.FundraiseShape.value;
export default FundraiseShapeSlice.reducer;
