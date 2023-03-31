import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { classshaka } from "@shaka-web-class/index";
import { TypesShakaShape } from "@shaka-web-shapes/store";
import { TypesLibraryBundles } from "@wavesrcool/library/lib/bundles/_types";

const { bundles } = classshaka;

export type TypesContactShapeBundles = {
  InvoiceAmount: TypesLibraryBundles;
  InvoiceNote: TypesLibraryBundles;
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

  lndata: string;
  lnhash: string;

  lnverifyentrace: boolean;
  lnverify: boolean;
  lnverifyattempts: number;
  lnverifytime: number;
  lnverifyprevious: boolean;

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
    lndata: ``,
    lnhash: ``,

    lnverifyentrace: false,
    lnverify: false,
    lnverifyattempts: 0,
    lnverifytime: 0,
    lnverifyprevious: false,

    bundles: {
      InvoiceAmount: bundles.reference,
      InvoiceNote: bundles.reference,
    },
  },
};

export const FundraiseShapeSlice = createSlice({
  name: "FundraiseShape",
  initialState,
  reducers: {
    initFundraiseShape: (state, { payload }: PayloadAction<boolean>) => {
      state.value = {
        ...initialState.value,
        lnverifyprevious: payload,
      };
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
      { payload }: PayloadAction<[string, string]>
    ) => {
      state.value = {
        ...state.value,
        lndata: payload[0],
        lnhash: payload[1],
      };
    },

    writeFundraiseShapeLnVerify: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.value = {
        ...state.value,
        lnverify: payload,
      };
    },

    writeFundraiseShapeLnVerifyAttempts: (state) => {
      const lnverifyattempts = state.value.lnverifyattempts + 1;

      state.value = {
        ...state.value,
        lnverifyattempts,
      };
    },

    writeFundraiseShapeLnVerifyTime: (state) => {
      const lnverifytime = Date.now();
      state.value = {
        ...state.value,
        lnverifytime,
      };
    },

    writeFundraiseShapeLnVerifyEntracte: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.value = {
        ...state.value,
        lnverifyentrace: payload,
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
    writeFundraiseShapeBundlesInvoiceNote: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const InvoiceNote = bundles.cyclic.letters({
        bundle: state.value.bundles.InvoiceNote,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          InvoiceNote,
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
  writeFundraiseShapeBundlesInvoiceNote,

  writeFundraiseShapeLnVerify,
  writeFundraiseShapeLnVerifyAttempts,
  writeFundraiseShapeLnVerifyTime,
  writeFundraiseShapeLnVerifyEntracte,
} = FundraiseShapeSlice.actions;

export const ofFundraiseShape = (
  state: TypesShakaShape
): TypesFundraiseShapeValue => state.FundraiseShape.value;
export default FundraiseShapeSlice.reducer;
