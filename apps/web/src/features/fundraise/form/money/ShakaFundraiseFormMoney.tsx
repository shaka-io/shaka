import {
  TypesFundraiseShapeMoneyKind,
  writeFundraiseShapeMoneyKind,
} from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaFundraiseFormMoney = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseFormMoney: React.FC<
  TypesShakaFundraiseFormMoney
> = ({ basis }: TypesShakaFundraiseFormMoney) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const lcShakaFundraiseFormMoneyToggle = React.useCallback(
    (kind: TypesFundraiseShapeMoneyKind) => {
      //
      // @notes:
      fold(writeFundraiseShapeMoneyKind(kind));

      // end
      return;
    },
    [fold]
  );

  return (
    <>
      <div
        className={`flex flex-row rounded w-full h-12 bg-accent opacity-80 items-center justify-between space-x-3 px-2`}
      >
        <button
          className={`btn btn-sm btn-accent bg-shaka-accent_relief flex-1 font-apercu text-opacity-50 focus:text-white hover:text-white`}
          onClick={() => lcShakaFundraiseFormMoneyToggle("btc")}
        >
          {"Bitcoin"}
        </button>
        <button
          className={`btn btn-sm btn-accent bg-shaka-accent_relief flex-1 font-apercu text-opacity-50 focus:text-white hover:text-white`}
          onClick={() => lcShakaFundraiseFormMoneyToggle("fiat")}
        >
          {`${t(`glossary:fiat`, `fiat`)}`}
        </button>
      </div>
    </>
  );
};
