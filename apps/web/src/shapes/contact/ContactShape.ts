import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { classshaka } from "@shaka-web-class/index";
import { TypesShakaShape } from "@shaka-web-shapes/store";
import { TypesLibraryBundles } from "@wavesrcool/library/lib/bundles/_types";

const { bundles } = classshaka;

export type TypesContactShapeBundles = {
  ContactName: TypesLibraryBundles;
  ContactEmail: TypesLibraryBundles;
  ContactContent: TypesLibraryBundles;
};

export type TypesContactShapeThread =
  | `glossary:please_write_3_words_minimum`
  | `glossary:please_use_a_valid_email`
  | "root";

export type TypesContactShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesContactShapeThread | "";
  //
  // shape type map ContactShape
  //
  bundles: TypesContactShapeBundles;
};

export type TypesContactShape = {
  value: TypesContactShapeValue;
};

const initialState: TypesContactShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial ContactShape
    //

    bundles: {
      ContactName: bundles.reference,
      ContactEmail: bundles.reference,
      ContactContent: bundles.reference,
    },
  },
};

export const ContactShapeSlice = createSlice({
  name: "ContactShape",
  initialState,
  reducers: {
    initContactShape: (state) => {
      state.value = initialState.value;
    },

    writeContactShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeContactShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeContactShapeInverseTrue: (
      state,
      action: PayloadAction<TypesContactShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeContactShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions ContactShape
    //

    writeContactShapeBundlesContactName: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const ContactName = bundles.cyclic.letters({
        bundle: state.value.bundles.ContactName,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          ContactName,
        },
      };
    },

    writeContactShapeBundlesContactEmail: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const ContactEmail = bundles.cyclic.letters({
        bundle: state.value.bundles.ContactEmail,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          ContactEmail,
        },
      };
    },

    writeContactShapeBundlesContactContent: (
      state,
      action: PayloadAction<{ letters: string; pass: boolean }>
    ) => {
      const { letters, pass } = action.payload;
      const ContactContent = bundles.cyclic.letters({
        bundle: state.value.bundles.ContactContent,
        letters,
        pass,
      });

      state.value = {
        ...state.value,
        bundles: {
          ...state.value.bundles,
          ContactContent,
        },
      };
    },
  },
});

export const {
  initContactShape,
  writeContactShapeEntracteTrue,
  writeContactShapeEntracteFalse,
  writeContactShapeInverseTrue,
  writeContactShapeInverseFalse,
  //
  // shape library ContactShape
  //

  writeContactShapeBundlesContactContent,
  writeContactShapeBundlesContactEmail,
  writeContactShapeBundlesContactName,
} = ContactShapeSlice.actions;

export const ofContactShape = (
  state: TypesShakaShape
): TypesContactShapeValue => state.ContactShape.value;
export default ContactShapeSlice.reducer;
