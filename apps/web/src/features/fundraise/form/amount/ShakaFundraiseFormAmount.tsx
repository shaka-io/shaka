import {
  ofFundraiseShape,
  writeFundraiseShapeBundlesInvoiceAmount,
} from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaFundraiseFormAmount = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseFormAmount: React.FC<
  TypesShakaFundraiseFormAmount
> = ({ basis }: TypesShakaFundraiseFormAmount) => {
  useTranslation(basis.dictionary);

  const fold = useFold();

  const FundraiseShape = useShape(ofFundraiseShape);

  const lcShakaFundraiseFormAmountInput = React.useCallback(
    (letters: string) => {
      //
      // @notes:
      if (FundraiseShape.entracte) return;
      fold(
        writeFundraiseShapeBundlesInvoiceAmount({
          letters: letters.replace(/[^\d]/g, ``),
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
      <input
        type={"text"}
        placeholder={FundraiseShape.moneykind === `btc` ? `40,000` : `10`}
        value={FundraiseShape.bundles.InvoiceAmount.letters}
        className={`input input-ghost w-[200px] font-apercu font-medium text-white focus:text-white text-4xl placeholder:text-white accent-blue-400 caret-pink-300 focus:bg-transparent focus:outline-0 ${
          FundraiseShape.moneykind === `btc` ? `` : `pl-12`
        }`}
        onChange={({ target: { value } }) =>
          lcShakaFundraiseFormAmountInput(value)
        }
      />
    </>
  );
};
