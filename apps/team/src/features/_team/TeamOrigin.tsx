import { ShakaFooter } from "@shaka-team-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-team-components/navigation/ShakaNavigation";
import { TeamForm } from "@shaka-team-features/_team/form/TeamForm";
import { useShape } from "@shaka-team-shapes/hooks";
import { ofRootShape } from "@shaka-team-shapes/root/RootShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import * as React from "react";

export type TypesTeamOrigin = {
  basis: TypesShakaBasis;
};

export const TeamOrigin: React.FC<TypesTeamOrigin> = ({
  basis,
}: TypesTeamOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const RootShape = useShape(ofRootShape);

  return (
    <>
      <Head>
        <title>{`SHAKA TEAM${
          !RootShape.networkfound
            ? ` ... ${t(`glossary:loading`, `loading`)}`
            : ``
        }`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-secondary min-h-screen overflow-hidden`}
      >
        <div className={`flex flex-row w-full justify-center`}>
          <ShakaNavigation basis={{ ...basis, bg: `bg-secondary` }} />
        </div>

        <TeamForm basis={{ ...basis }} />
      </div>
      <ShakaFooter basis={{ ...basis, bg: `bg-secondary` }} />
    </>
  );
};
