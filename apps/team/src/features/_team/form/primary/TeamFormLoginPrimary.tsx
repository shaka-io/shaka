import { useFold, useShape } from "@shaka-team-shapes/hooks";
import {
  ofLoginShape,
  writeLoginShapeBundlesLoginPrimary,
} from "@shaka-team-shapes/login/LoginShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesTeamFormLoginPrimary = {
  basis: TypesShakaBasis;
};

export const TeamFormLoginPrimary: React.FC<TypesTeamFormLoginPrimary> = ({
  basis,
}: TypesTeamFormLoginPrimary) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const LoginShape = useShape(ofLoginShape);

  const lcTeamFormLoginPrimaryInput = React.useCallback(
    (letters: string) => {
      //
      // @notes:
      const pass = letters.length > 6;

      fold(writeLoginShapeBundlesLoginPrimary({ letters, pass }));

      // end
      return;
    },
    [fold]
  );

  return (
    <>
      <div
        className={`flex flex-row w-full rounded-xl h-12 bg-secondary opacity-90 items-end justify-center pl-2`}
      >
        <input
          type={"text"}
          placeholder={`${t(`glossary:login`, `login`)}`}
          value={LoginShape.bundles.LoginPrimary.letters}
          className={`input input-ghost w-full font-apercu font-bold text-white focus:text-white text-base text-center placeholder:text-white accent-blue-400 caret-pink-300 focus:bg-transparent focus:outline-0`}
          onChange={({ target: { value } }) =>
            lcTeamFormLoginPrimaryInput(value)
          }
        />
      </div>
    </>
  );
};
