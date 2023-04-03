import { TeamFormPrimaryCredential } from "@shaka-team-features/_team/form/primary/credential/TeamFormPrimaryCredential";
import { TeamFormPrimaryLogin } from "@shaka-team-features/_team/form/primary/login/TeamFormPrimaryLogin";
import { TeamFormSecondaryConfirm } from "@shaka-team-features/_team/form/secondary/confirm/TeamFormSecondaryConfirm";
import { TeamFormSecondaryPasscode } from "@shaka-team-features/_team/form/secondary/passcode/TeamFormSecondaryPasscode";
import { useShape } from "@shaka-team-shapes/hooks";
import { ofLoginShape } from "@shaka-team-shapes/login/LoginShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesTeamForm = {
  basis: TypesShakaBasis;
};

export const TeamForm: React.FC<TypesTeamForm> = ({ basis }: TypesTeamForm) => {
  const { t } = useTranslation(basis.dictionary);
  const LoginShape = useShape(ofLoginShape);

  return (
    <>
      <div className={`flex flex-row w-full justify-center px-8`}>
        <div
          className={`flex flex-col rounded-lg min-h-120 w-full lg:w-120 py-4 px-4 bg-white opacity-90 items-center space-y-3 py-8`}
        >
          <div
            className={`flex flex-col w-full h-full bg-shaka-secondary_relief rounded-xl space-y-3 py-8 `}
          >
            <div className={`flex flex-row w-full justify-center`}>
              <p
                className={`font-apercu font-medium text-secondary-content text-opacity-40 text-3xl font-bold `}
              >
                {`${t(`glossary:`, `welcome`)}`}
              </p>
            </div>

            <div className={`flex flex-col space-y-3 pt-4 px-3 `}>
              {LoginShape.view === `primary` ? (
                <>
                  <TeamFormPrimaryCredential basis={{ ...basis }} />
                  <TeamFormPrimaryLogin basis={{ ...basis }} />
                </>
              ) : null}
              {LoginShape.view === `secondary` ? (
                <>
                  <TeamFormSecondaryPasscode basis={{ ...basis }} />
                  <TeamFormSecondaryConfirm basis={{ ...basis }} />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
