import { TeamFormLoginPrimary } from "@shaka-team-features/_team/form/primary/TeamFormLoginPrimary";
import { useFold, useShape } from "@shaka-team-shapes/hooks";
import {
  ofLoginShape,
  writeLoginShapeEntracteFalse,
  writeLoginShapeEntracteTrue,
  writeLoginShapeInverseFalse,
} from "@shaka-team-shapes/login/LoginShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesTeamForm = {
  basis: TypesShakaBasis;
};

export const TeamForm: React.FC<TypesTeamForm> = ({ basis }: TypesTeamForm) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const LoginShape = useShape(ofLoginShape);

  const lcaTeamFormSubmit = React.useCallback(async () => {
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

        console.log(`run`);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(`complete`);

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
  }, [fold]);

  return (
    <>
      <div className={`flex flex-row w-full justify-center px-8`}>
        <div
          className={`flex flex-col rounded-lg min-h-120 w-full lg:w-120 py-4 px-4 bg-white opacity-90 items-center space-y-3 py-8`}
        >
          <div className={`flex flex-col w-full space-y-6`}>
            <div className={`flex flex-row w-full justify-center`}>
              <p
                className={`font-apercu font-medium text-secondary-content text-opacity-70 text-3xl font-bold `}
              >
                {`${t(`glossary:`, `welcome`)}`}
              </p>
            </div>

            <div className={`flex flex-col space-y-3`}>
              <TeamFormLoginPrimary basis={{ ...basis }} />

              <div className={`flex flex-row w-full h-12 `}>
                <button
                  className={`btn btn-secondary rounded-xl flex-1 font-apercu text-white focus:text-white hover:text-white ${
                    LoginShape.entracte ? `loading` : ``
                  }`}
                  onClick={lcaTeamFormSubmit}
                >
                  {`${t(`glossary:send`, `send`)}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
