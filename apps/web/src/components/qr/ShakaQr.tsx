import { TypesFiguresShakaQrDynamic } from "@shaka-web-components/qr/ShakaQrDynamic";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import dynamic from "next/dynamic";
import * as React from "react";

const ShakaQrDynamic = dynamic(
  () => import("./ShakaQrDynamic").then((module) => module.ShakaQrDynamic),
  {
    ssr: false,
  }
);

export type TypesShakaQr = {
  basis: TypesShakaBasis & TypesFiguresShakaQrDynamic;
};

export const ShakaQr: React.FC<TypesShakaQr> = ({ basis }: TypesShakaQr) => {
  return <ShakaQrDynamic basis={{ ...basis }} />;
};
