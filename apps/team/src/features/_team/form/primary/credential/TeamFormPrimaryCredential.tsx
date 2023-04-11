import { useFold, useShape } from "@shaka-team-shapes/hooks";
import {
  ofLoginShape,
  writeLoginShapeBundlesPrimaryCredential,
} from "@shaka-team-shapes/login/LoginShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesTeamFormPrimaryCredential = {
  basis: TypesShakaBasis;
};

export const TeamFormPrimaryCredential: React.FC<
  TypesTeamFormPrimaryCredential
> = ({ basis }: TypesTeamFormPrimaryCredential) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const LoginShape = useShape(ofLoginShape);

  const lcTeamFormPrimaryCredentialInput = React.useCallback(
    (letters: string) => {
      //
      // @notes:
      const pass = letters.length > 6;

      fold(writeLoginShapeBundlesPrimaryCredential({ letters, pass }));

      // end
      return;
    },
    [fold]
  );

  return (
    <>
      <div
        className={`flex flex-row rounded-lg w-full h-16 bg-secondary opacity-90 items-center justify-between space-x-3 px-2`}
      >
        <input
          type={"text"}
          placeholder={`${t(`glossary:`, `enter credential`)}`}
          value={LoginShape.bundles.PrimaryCredential.letters}
          className={`input input-ghost bg-shaka-secondary_relief flex-1 h-10 font-apercu font-bold text-sm text-center font-medium text-secondary-content text-opacity-50 focus:text-secondary-content text-lg placeholder:text-secondary-content placeholder:text-opacity-50 placeholder:uppercase accent-blue-400 caret-pink-300 focus:outline-0 opacity-80`}
          onChange={({ target: { value } }) =>
            lcTeamFormPrimaryCredentialInput(value)
          }
        />
      </div>
    </>
  );
};
