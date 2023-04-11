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
  credential: string | undefined;
  visibleReply: boolean;
  replyArr: [string, string, string];
  replyMessage: string;
  replySent: boolean;
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
    visibleReply: false,
    credential: undefined,
    replyArr: [``, ``, ``],
    replyMessage: ``,
    replySent: false,
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

    writeRootShapeVisibleReply: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.value = {
        ...state.value,
        visibleReply: payload,
      };
    },

    writeRootShapeReplyArr: (
      state,
      { payload }: PayloadAction<[string, string, string]>
    ) => {
      state.value = {
        ...state.value,
        replyArr: payload,
      };
    },

    writeRootShapeReplyMessage: (state, { payload }: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        replyMessage: payload,
      };
    },

    writeRootShapeCredential: (state, { payload }: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        credential: payload,
      };
    },

    writeRootShapeReplySent: (state, { payload }: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        replySent: payload,
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
  writeRootShapeCredential,
  writeRootShapeVisibleReply,
  writeRootShapeReplyArr,
  writeRootShapeReplyMessage,
  writeRootShapeReplySent,
} = RootShapeSlice.actions;

export const ofRootShape = (state: TypesShakaShape): TypesRootShapeValue =>
  state.RootShape.value;
export default RootShapeSlice.reducer;
