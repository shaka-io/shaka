import {
  ofContactShape,
  writeContactShapeBundlesContactContent,
} from "@shaka-web-shapes/contact/ContactShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaContactFormContent = {
  basis: TypesShakaBasis;
};

export const ShakaContactFormContent: React.FC<
  TypesShakaContactFormContent
> = ({ basis }: TypesShakaContactFormContent) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const ContactShape = useShape(ofContactShape);

  const lcShakaContactFormContentInput = React.useCallback(
    (letters: string) => {
      //
      // @notes:
      if (ContactShape.entracte) return;
      const pass = letters.split(" ").length > 2;
      fold(writeContactShapeBundlesContactContent({ letters, pass }));

      // end
      return;
    },
    [ContactShape.entracte, fold]
  );

  return (
    <>
      <div
        className={`flex flex-row w-full rounded-lg h-48 bg-secondary opacity-90 items-start justify-center pl-2 py-2`}
      >
        <textarea
          placeholder={` ${t(`glossary:`, `Question`)}`} // @todo
          value={ContactShape.bundles.ContactContent.letters}
          className={`textarea textarea-ghost w-full h-full font-apercu font-medium text-white focus:text-white text-lg placeholder:text-white accent-blue-400 caret-pink-300 focus:bg-transparent focus:outline-0`}
          onChange={({ target: { value } }) =>
            lcShakaContactFormContentInput(value)
          }
        />
      </div>
    </>
  );
};
