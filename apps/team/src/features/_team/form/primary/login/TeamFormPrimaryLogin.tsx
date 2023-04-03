import { useLocale } from "@shaka-team-hooks/use-locale";
import { useShakaGraphTeamLoginAttemptMutation } from "@shaka-team-library/graph/hooks";
import { useFold, useShape } from "@shaka-team-shapes/hooks";
import {
  ofLoginShape,
  writeLoginShapeEntracteFalse,
  writeLoginShapeEntracteTrue,
  writeLoginShapeInverseFalse,
  writeLoginShapeView,
} from "@shaka-team-shapes/login/LoginShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesTeamFormPrimaryLogin = {
  basis: TypesShakaBasis;
};

export const TeamFormPrimaryLogin: React.FC<TypesTeamFormPrimaryLogin> = ({
  basis,
}: TypesTeamFormPrimaryLogin) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const LoginShape = useShape(ofLoginShape);

  const locale = useLocale();

  const [graphTeamLoginAttempt] = useShakaGraphTeamLoginAttemptMutation();

  const lcaTeamFormPrimaryLoginSubmit = React.useCallback(async () => {
    //
    // @notes:

    //
    // conditions

    // error false
    fold(writeLoginShapeInverseFalse());

    // loading start
    fold(writeLoginShapeEntracteTrue());

    //
    // run
    const run = async () => {
      try {
        //
        // start

        const { data: graphTeamLoginAttemptd } = await graphTeamLoginAttempt({
          variables: {
            figure: {
              locale,
              credential: LoginShape.bundles.PrimaryCredential.letters,
            },
          },
        });

        if (graphTeamLoginAttemptd?.ShakaGraphTeamLoginAttempt.pass) {
          fold(writeLoginShapeView(`secondary`));
        }

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        fold(writeLoginShapeEntracteFalse());
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [
    LoginShape.bundles.PrimaryCredential.letters,
    fold,
    graphTeamLoginAttempt,
    locale,
  ]);

  return (
    <>
      <div
        className={`flex flex-row rounded-xl w-full h-12 bg-secondary items-center opacity-90 px-2`}
      >
        <button
          className={`btn btn-sm btn-secondary bg-shaka-secondary_relief flex-1 font-apercu text-opacity-50 focus:text-secondary-content hover:text-white opacity-80 ${
            LoginShape.entracte ? `loading` : ``
          }`}
          onClick={lcaTeamFormPrimaryLoginSubmit}
        >
          {`${t(`glossary:`, `login`)}`}
        </button>
      </div>
    </>
  );
};
