import { useLocale } from "@shaka-web-hooks/use-locale";
import { useShakaGraphLnInvoiceCreateMutation } from "@shaka-web-library/graph/hooks";
import {
  ofFundraiseShape,
  TypesFundraiseShapeThread,
  writeFundraiseShapeEntracteFalse,
  writeFundraiseShapeEntracteTrue,
  writeFundraiseShapeInverseFalse,
  writeFundraiseShapeInverseTrue,
  writeFundraiseShapeLnInvoice,
} from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaFundraiseFormGenerate = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseFormGenerate: React.FC<
  TypesShakaFundraiseFormGenerate
> = ({ basis }: TypesShakaFundraiseFormGenerate) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const FundraiseShape = useShape(ofFundraiseShape);

  const locale = useLocale();
  const [lnInvoiceCreate] = useShakaGraphLnInvoiceCreateMutation();

  const lcaShakaFundraiseFormSubmit = React.useCallback(async () => {
    //
    // @notes:

    let th: TypesFundraiseShapeThread;

    if (
      FundraiseShape.bundles.InvoiceAmount.letters.length &&
      !FundraiseShape.bundles.InvoiceAmount.pass
    ) {
      th = `root`;
      fold(writeFundraiseShapeInverseTrue(th));
      return;
    }

    //
    // conditions

    // error false
    fold(writeFundraiseShapeInverseFalse());

    // loading start
    fold(writeFundraiseShapeEntracteTrue());

    fold(writeFundraiseShapeLnInvoice([``, ``]));

    //
    // run
    const run = async () => {
      try {
        //
        // start

        const baseamount = FundraiseShape.moneykind === `fiat` ? `10` : `40000`;

        const { data } = await lnInvoiceCreate({
          variables: {
            figure: {
              locale,
              satoshis: `${FundraiseShape.moneykind === `fiat` ? `$` : ``}${
                FundraiseShape.bundles.InvoiceAmount.letters || baseamount
              }`,
            },
          },
        });

        if (
          data &&
          data.ShakaGraphLnInvoiceCreate.pass &&
          data.ShakaGraphLnInvoiceCreate.data?.ln &&
          data.ShakaGraphLnInvoiceCreate.data?.hash
        ) {
          fold(
            writeFundraiseShapeLnInvoice([
              data.ShakaGraphLnInvoiceCreate.data.ln,
              data.ShakaGraphLnInvoiceCreate.data?.hash,
            ])
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
        fold(writeFundraiseShapeEntracteFalse());
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [
    FundraiseShape.bundles.InvoiceAmount.letters,
    FundraiseShape.bundles.InvoiceAmount.pass,
    FundraiseShape.moneykind,
    fold,
    lnInvoiceCreate,
    locale,
  ]);

  return (
    <>
      <div
        className={`flex flex-row rounded w-full h-12 bg-accent items-center opacity-80 px-2`}
      >
        <button
          className={`btn btn-sm btn-accent bg-shaka-accent_relief flex-1 font-apercu text-opacity-50 focus:text-white hover:text-white ${
            FundraiseShape.entracte ? `loading` : ``
          }`}
          onClick={lcaShakaFundraiseFormSubmit}
        >
          {`${t(`glossary:generate`, `generate`)}${
            FundraiseShape.lndata ? ` ${t(`glossary:new`, `new`)}` : ``
          }`}
        </button>
      </div>
    </>
  );
};
