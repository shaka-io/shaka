import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import QRCodeStyling, { Options } from "qr-code-styling";
import * as React from "react";

export type TypesShakaQrDynamic = {
  basis: TypesShakaBasis & TypesFiguresShakaQrDynamic;
};

export type TypesFiguresShakaQrDynamic = {
  cl?: string;
  clRef?: string;
  data: string;
  picture?: string;
  size?: number;
};

export const ShakaQrDynamic: React.FC<TypesShakaQrDynamic> = ({
  basis,
}: TypesShakaQrDynamic) => {
  const [options] = React.useState<Options>({
    width: basis.size || 300,
    height: basis.size || 300,
    type: "svg",
    data: basis.data,
    image: basis.picture,
    margin: 0,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0,
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: "currentColor",
      type: "extra-rounded",
    },
    backgroundOptions: {
      color: "transparent",
    },
    cornersSquareOptions: {
      color: "currentColor",
      type: "extra-rounded",
    },
    cornersDotOptions: {
      color: "currentColor",
      type: "dot",
    },
  });

  const [qrCode] = React.useState<QRCodeStyling>(new QRCodeStyling(options));
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  return (
    <div className={`flex ${basis.cl || ``}`}>
      <div className={`${basis.clRef || ``}`} ref={ref} />
    </div>
  );
};
