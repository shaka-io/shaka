import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { classshaka } from "@shaka-web-class/index";
import { TypesShakaShape } from "@shaka-web-shapes/store";
import { TypesLibraryBundles } from "@wavesrcool/library/lib/bundles/_types";

const { bundles } = classshaka;

export type TypesFundraiseShapeLnList = {
  created: string;
  key: string;
  name?: string | null | undefined;
  note?: string | null | undefined;
  amount: string;
};

export type TypesContactShapeBundles = {
  InvoiceAmount: TypesLibraryBundles;
  InvoiceFrom: TypesLibraryBundles;
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
  lnamount: string;

  lnverifyentrace: boolean;
  lnverify: boolean;
  lnverifyattempts: number;
  lnverifytime: number;
  lnverifyprevious: boolean;

  bundles: TypesContactShapeBundles;

  lnlist: TypesFundraiseShapeLnList[];

  toastvisible: boolean;
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
    lnamount: ``,

    lnverifyentrace: false,
    lnverify: false,
    lnverifyattempts: 0,
    lnverifytime: 0,
    lnverifyprevious: false,

    bundles: {
      InvoiceAmount: bundles.reference,
      InvoiceFrom: bundles.reference,
      InvoiceNote: bundles.reference,
    },

    lnlist: [],

    toastvisible: false,
  },
};

export const FundraiseShapeSlice = createSlice({
  name: "FundraiseShape",
  initialState,
  reducers: {
    initFundraiseShape: (state) => {
      state.value = {
        ...initialState.value,
      };
    },

    initFundraiseShapeBundles: (state) => {
      state.value = {
        ...state.value,
        bundles: {
          InvoiceAmount: bundles.reference,
          InvoiceFrom: bundles.reference,
          InvoiceNote: bundles.reference,
        },
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

    writeFundraiseShapeLnVerifyPrevious: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.value = {
        ...state.value,
        lnverifyprevious: payload,
      };
    },

    writeFundraiseShapeLnVerifyAttemptsInc: (state) => {
      const lnverifyattempts = state.value.lnverifyattempts + 1;

      state.value = {
        ...state.value,
        lnverifyattempts,
      };
    },

    writeFundraiseShapeLnVerifyAttemptsInit: (state) => {
      state.value = {
        ...state.value,
        lnverifyattempts: 0,
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

    writeFundraiseShapeLnAmount: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.value = {
        ...state.value,
        lnamount: payload,
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

    writeFundraiseShapeBundlesInvoiceFrom: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const InvoiceFrom = bundles.cyclic.letters({
        bundle: state.value.bundles.InvoiceFrom,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          InvoiceFrom,
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

    writeFundraiseShapeLnList: (
      state,
      { payload }: PayloadAction<TypesFundraiseShapeLnList[]>
    ) => {
      const lnlist = payload.sort((a, b) => (a.created < b.created ? 1 : -1));

      state.value = {
        ...state.value,
        lnlist,
      };
    },

    writeFundraiseShapeLnListAdd: (
      state,
      { payload }: PayloadAction<TypesFundraiseShapeLnList>
    ) => {
      const lnlist = [...state.value.lnlist, payload].sort((a, b) =>
        a.created < b.created ? 1 : -1
      );

      state.value = {
        ...state.value,
        lnlist,
      };
    },

    writeFundraiseShapeToastVisible: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.value = {
        ...state.value,
        toastvisible: payload,
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
  initFundraiseShapeBundles,

  writeFundraiseShapeMoneyKind,
  writeFundraiseShapeLnInvoice,

  writeFundraiseShapeBundlesInvoiceAmount,
  writeFundraiseShapeBundlesInvoiceFrom,
  writeFundraiseShapeBundlesInvoiceNote,

  writeFundraiseShapeLnVerify,
  writeFundraiseShapeLnVerifyPrevious,
  writeFundraiseShapeLnVerifyAttemptsInc,
  writeFundraiseShapeLnVerifyAttemptsInit,
  writeFundraiseShapeLnVerifyTime,
  writeFundraiseShapeLnVerifyEntracte,
  writeFundraiseShapeLnList,
  writeFundraiseShapeLnListAdd,
  writeFundraiseShapeLnAmount,
  writeFundraiseShapeToastVisible,
} = FundraiseShapeSlice.actions;

export const ofFundraiseShape = (
  state: TypesShakaShape
): TypesFundraiseShapeValue => state.FundraiseShape.value;
export default FundraiseShapeSlice.reducer;
