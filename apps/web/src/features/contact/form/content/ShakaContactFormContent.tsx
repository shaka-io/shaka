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
        className={`flex flex-row w-full rounded-lg h-48 bg-secondary opacity-80 items-start justify-center px-2 py-2`}
      >
        <textarea
          placeholder={`${t(`glossary:question`, `question`)}`.toUpperCase()}
          value={ContactShape.bundles.ContactContent.letters}
          className={`textarea textarea-ghost w-full h-full bg-shaka-secondary_relief focus:bg-shaka-secondary_relief font-apercu font-bold text-secondary-focus text-opacity-70 focus:text-secondary-focus text-sm pl-4 placeholder:text-secondary-content placeholder:text-opacity-50 accent-blue-400 caret-pink-300 focus:bg-transparent focus:outline-0 focus:text-opacity-100 opacity-70`}
          onChange={({ target: { value } }) =>
            lcShakaContactFormContentInput(value)
          }
        />
      </div>
    </>
  );
};
