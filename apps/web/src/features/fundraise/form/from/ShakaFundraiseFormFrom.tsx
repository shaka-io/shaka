import {
  ofFundraiseShape,
  writeFundraiseShapeBundlesInvoiceFrom,
} from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaFundraiseFormFrom = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseFormFrom: React.FC<TypesShakaFundraiseFormFrom> = ({
  basis,
}: TypesShakaFundraiseFormFrom) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const FundraiseShape = useShape(ofFundraiseShape);

  const lcShakaFundraiseFormFromInput = React.useCallback(
    (letters: string) => {
      //
      // @notes:
      if (FundraiseShape.entracte) return;
      fold(
        writeFundraiseShapeBundlesInvoiceFrom({
          letters,
          pass: true,
        })
      );
      // end
      return;
    },
    [FundraiseShape.entracte, fold]
  );

  return (
    <>
      <div
        className={`flex flex-row rounded w-full h-12 bg-accent opacity-80 items-center justify-between space-x-3 px-2`}
      >
        <input
          type={"text"}
          placeholder={` ${t(`glossary:`, `From`)} (${t(
            `glossary:optional`,
            `optional`
          )})`}
          value={FundraiseShape.bundles.InvoiceFrom.letters}
          className={`input input-ghost bg-shaka-accent_relief flex-1 h-8 font-apercu font-bold text-sm font-medium text-accent-content text-opacity-50 focus:text-accent-content text-lg placeholder:text-accent-content placeholder:text-opacity-50 placeholder:uppercase accent-blue-400 caret-pink-300 focus:outline-0`}
          onChange={({ target: { value } }) =>
            lcShakaFundraiseFormFromInput(value)
          }
        />
      </div>
    </>
  );
};
