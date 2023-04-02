import {
  ofContactShape,
  writeContactShapeBundlesContactName,
} from "@shaka-web-shapes/contact/ContactShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaContactFormName = {
  basis: TypesShakaBasis;
};

export const ShakaContactFormName: React.FC<TypesShakaContactFormName> = ({
  basis,
}: TypesShakaContactFormName) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const ContactShape = useShape(ofContactShape);

  const lcShakaContactFormNameInput = React.useCallback(
    (letters: string) => {
      //
      // @notes:
      if (ContactShape.entracte) return;
      const pass = !!letters || true;
      fold(writeContactShapeBundlesContactName({ letters, pass }));

      // end
      return;
    },
    [ContactShape.entracte, fold]
  );

  return (
    <>
      <div
        className={`flex flex-row rounded-lg w-full h-12 bg-secondary opacity-80 items-center justify-between space-x-3 px-2`}
      >
        <input
          type={"text"}
          placeholder={` ${t(`glossary:name`, `name`)}`}
          value={ContactShape.bundles.ContactName.letters}
          className={`input input-ghost bg-shaka-secondary_relief flex-1 h-8 font-apercu font-bold text-sm font-medium text-secondary-content text-opacity-50 focus:text-secondary-content text-lg placeholder:text-secondary-content placeholder:text-opacity-50 placeholder:uppercase accent-blue-400 caret-pink-300 focus:outline-0 opacity-70`}
          onChange={({ target: { value } }) =>
            lcShakaContactFormNameInput(value)
          }
        />
      </div>
    </>
  );
};
