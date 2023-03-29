import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { classshaka } from "@shaka-web-class/index";
import { TypesShakaShape } from "@shaka-web-shapes/store";
import { TypesLibraryBundles } from "@wavesrcool/library/lib/bundles/_types";

const { bundles } = classshaka;

export type TypesContactShapeBundles = {
  InvoiceAmount: TypesLibraryBundles;
};

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

  bundles: TypesContactShapeBundles;
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

    moneykind: `btc`,
    lninvoice: ``,

    bundles: {
      InvoiceAmount: bundles.reference,
    },
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

    writeFundraiseShapeBundlesInvoiceAmount: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const InvoiceAmount = bundles.cyclic.letters({
        bundle: state.value.bundles.InvoiceAmount,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          InvoiceAmount,
        },
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

  writeFundraiseShapeBundlesInvoiceAmount,
} = FundraiseShapeSlice.actions;

export const ofFundraiseShape = (
  state: TypesShakaShape
): TypesFundraiseShapeValue => state.FundraiseShape.value;
export default FundraiseShapeSlice.reducer;
