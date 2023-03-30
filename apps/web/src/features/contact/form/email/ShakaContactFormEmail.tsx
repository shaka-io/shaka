import { LibraryRegExpEmail } from "@shaka-js/library/lib/regexp/email";
import {
  ofContactShape,
  writeContactShapeBundlesContactEmail,
} from "@shaka-web-shapes/contact/ContactShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaContactFormEmail = {
  basis: TypesShakaBasis;
};

export const ShakaContactFormEmail: React.FC<TypesShakaContactFormEmail> = ({
  basis,
}: TypesShakaContactFormEmail) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const ContactShape = useShape(ofContactShape);

  const lcShakaContactFormEmailInput = React.useCallback(
    (letters: string) => {
      //
      // @notes:
      if (ContactShape.entracte) return;
      const pass = LibraryRegExpEmail.test(letters);
      fold(writeContactShapeBundlesContactEmail({ letters, pass }));
      // end
      return;
    },
    [ContactShape.entracte, fold]
  );

  return (
    <>
      <div
        className={`flex flex-row w-full rounded-lg h-12 bg-secondary opacity-90 items-end justify-center pl-2`}
      >
        <input
          type={"text"}
          placeholder={` ${t(`glossary:email`, `email`)}`}
          value={ContactShape.bundles.ContactEmail.letters}
          className={`input input-ghost w-full font-apercu font-medium text-white focus:text-white text-lg placeholder:text-white accent-blue-400 caret-pink-300 focus:bg-transparent focus:outline-0`}
          onChange={({ target: { value } }) =>
            lcShakaContactFormEmailInput(value)
          }
        />
      </div>
    </>
  );
};
