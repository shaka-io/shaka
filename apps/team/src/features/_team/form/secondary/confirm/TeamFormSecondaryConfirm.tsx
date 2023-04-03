import { useLocale } from "@shaka-team-hooks/use-locale";
import { useShakaGraphTeamLoginConfirmMutation } from "@shaka-team-library/graph/hooks";
import { useFold, useShape } from "@shaka-team-shapes/hooks";
import {
  initLoginShape,
  ofLoginShape,
  writeLoginShapeEntracteFalse,
  writeLoginShapeEntracteTrue,
  writeLoginShapeInverseFalse,
} from "@shaka-team-shapes/login/LoginShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesTeamFormSecondaryConfirm = {
  basis: TypesShakaBasis;
};

export const TeamFormSecondaryConfirm: React.FC<
  TypesTeamFormSecondaryConfirm
> = ({ basis }: TypesTeamFormSecondaryConfirm) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const LoginShape = useShape(ofLoginShape);

  const locale = useLocale();
  const router = useRouter();

  const [graphTeamLoginConfirm] = useShakaGraphTeamLoginConfirmMutation();

  const lcaTeamFormSecondaryConfirmSubmit = React.useCallback(async () => {
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

        const { data: graphTeamLoginConfirmd } = await graphTeamLoginConfirm({
          variables: {
            figure: {
              locale,
              credential: LoginShape.bundles.PrimaryCredential.letters,
              passcode: LoginShape.bundles.SecondaryPasscode.letters,
            },
          },
        });

        if (graphTeamLoginConfirmd?.ShakaGraphTeamLoginConfirm.pass) {
          fold(initLoginShape());
          await router.push(
            `/session/${LoginShape.bundles.PrimaryCredential.letters}`
          );
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
    LoginShape.bundles.SecondaryPasscode.letters,
    fold,
    graphTeamLoginConfirm,
    locale,
    router,
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
          onClick={lcaTeamFormSecondaryConfirmSubmit}
        >
          {`${t(`glossary:`, `confirm`)}`}
        </button>
      </div>
    </>
  );
};
