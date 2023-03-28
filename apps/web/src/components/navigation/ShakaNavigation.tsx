import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import * as React from "react";

export type TypesShakaNavigation = {
  basis: TypesShakaBasis & TypesFiguresShakaNavigation;
};

export type TypesFiguresShakaNavigation = {
  cl?: string;
  bg?: string;
  click?: () => void;
};

export const ShakaNavigation: React.FC<TypesShakaNavigation> = ({
  basis,
}: TypesShakaNavigation) => {
  const lcShakaNavigationClick = React.useCallback(() => {
    //
    // @notes:
    if (basis.click) {
      basis.click();
    }

    // end
    return;
  }, [basis]);

  return (
    <div
      className={`group flex flex-row px-8 py-4 ${basis.bg || `bg-primary`} ${
        basis.cl || ``
      } `}
    >
      <button type={`button`} onClick={lcShakaNavigationClick}>
        <div className={`flex flex-row space-x-2 cursor-pointer`}>
          <div className={`flex group-hover:opacity-80`}>
            <svg
              version={"1.0"}
              xmlns={"http://www.w3.org/2000/svg"}
              width={"96.000000pt"}
              height={"96.000000pt"}
              viewBox={"0 0 96.000000 96.000000"}
              preserveAspectRatio={"xMidYMid meet"}
            >
              <g
                transform={
                  "translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                }
                fill={"#ffffff"}
                stroke={"none"}
              >
                <path
                  d={`M751 796 c-7 -8 -19 -59 -27 -113 -18 -123 -22 -133 -23 -57 -1 46
-6 65 -19 77 -24 21 -60 22 -83 1 -17 -15 -20 -14 -42 12 -22 25 -28 27 -52
19 -16 -6 -33 -19 -39 -30 -6 -11 -12 -22 -13 -24 -1 -2 -9 4 -18 13 -21 21
-69 21 -86 0 -9 -11 -16 -56 -19 -134 l-5 -118 -90 79 c-50 44 -100 82 -112
85 -53 14 -91 -48 -57 -92 11 -13 100 -94 199 -179 150 -130 188 -158 232
-171 100 -29 196 10 256 106 10 15 28 108 47 240 33 239 35 271 18 288 -16 16
-53 15 -67 -2z`}
                />
              </g>
            </svg>
          </div>
          <p
            className={`font-apercu font-medium text-5xl text-white group-hover:opacity-80`}
          >
            {`shaka`}
          </p>
        </div>
      </button>
    </div>
  );
};
