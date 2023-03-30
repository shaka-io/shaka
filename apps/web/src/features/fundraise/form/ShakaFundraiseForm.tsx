import { SatoshiV2Icon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { ShakaQr } from "@shaka-web-components/qr/ShakaQr";
import { ShakaFundraiseFormAmount } from "@shaka-web-features/fundraise/form/amount/ShakaFundraiseFormAmount";
import { useLocale } from "@shaka-web-hooks/use-locale";
import { useShakaGraphLnInvoiceCreateMutation } from "@shaka-web-library/graph/hooks";
import {
  ofFundraiseShape,
  TypesFundraiseShapeMoneyKind,
  TypesFundraiseShapeThread,
  writeFundraiseShapeEntracteFalse,
  writeFundraiseShapeEntracteTrue,
  writeFundraiseShapeInverseFalse,
  writeFundraiseShapeInverseTrue,
  writeFundraiseShapeLnInvoice,
  writeFundraiseShapeMoneyKind,
} from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaFundraiseForm = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseForm: React.FC<TypesShakaFundraiseForm> = ({
  basis,
}: TypesShakaFundraiseForm) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const FundraiseShape = useShape(ofFundraiseShape);

  const locale = useLocale();
  const [lnInvoiceGenerate] = useShakaGraphLnInvoiceCreateMutation();

  const lcShakaFundraiseOriginToggleMoneyKind = React.useCallback(
    (kind: TypesFundraiseShapeMoneyKind) => {
      //
      // @notes:
      fold(writeFundraiseShapeMoneyKind(kind));

      // end
      return;
    },
    [fold]
  );

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

    fold(writeFundraiseShapeLnInvoice(``));

    //
    // run
    const run = async () => {
      try {
        //
        // start

        const baseamount = FundraiseShape.moneykind === `fiat` ? `10` : `40000`;

        const { data } = await lnInvoiceGenerate({
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
          data.ShakaGraphLnInvoiceCreate.data?.ln
        ) {
          fold(
            writeFundraiseShapeLnInvoice(data.ShakaGraphLnInvoiceCreate.data.ln)
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
    lnInvoiceGenerate,
    locale,
  ]);

  return (
    <>
      <div
        className={`flex flex-col rounded min-h-120 w-full md:w-120 py-6 px-4 space-y-3 bg-white opacity-90`}
      >
        <div
          className={`flex flex-col rounded w-full h-36 px-4 justify-center items-center bg-accent opacity-90`}
        >
          <div className={`flex flex-row h-20 w-full p-1 lg:justify-end`}>
            <div
              className={`flex flex-row max-md:basis-3/4 w-full h-full items-center justify-center `}
            >
              <div className={`flex flex-row items-center justify-center w-16`}>
                {FundraiseShape.moneykind === `btc` ? (
                  <>
                    <SatoshiV2Icon
                      style={{
                        height: "48px",
                        width: "48px",
                        color: "#ffffff",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p
                      className={`font-apercu font-medium text-4xl text-white `}
                    >
                      {`$`}
                    </p>
                  </>
                )}
              </div>
              <div
                className={`flex flex-row w-full h-full items-center justify-center`}
              >
                <ShakaFundraiseFormAmount basis={{ ...basis }} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-row rounded w-full h-12 bg-accent opacity-80 items-center justify-between space-x-3 px-2`}
        >
          <button
            className={`btn btn-sm btn-accent bg-shaka-accent_relief flex-1 font-apercu text-opacity-50 focus:text-white hover:text-white`}
            onClick={() => lcShakaFundraiseOriginToggleMoneyKind("btc")}
          >
            {"Bitcoin"}
          </button>
          <button
            className={`btn btn-sm btn-accent bg-shaka-accent_relief flex-1 font-apercu text-opacity-50 focus:text-white hover:text-white`}
            onClick={() => lcShakaFundraiseOriginToggleMoneyKind("fiat")}
          >
            {`${t(`glossary:fiat`, `fiat`)}`}
          </button>
        </div>

        <div
          className={`flex flex-row rounded w-full h-12 bg-accent items-center opacity-80 px-2`}
        >
          <button
            className={`btn btn-sm btn-accent bg-shaka-accent_relief flex-1 font-apercu text-opacity-50 focus:text-white hover:text-white ${
              FundraiseShape.entracte ? `loading` : ``
            }`}
            onClick={lcaShakaFundraiseFormSubmit}
          >
            {`${t(`glossary:generate`, `generate`)}`}
          </button>
        </div>

        {FundraiseShape.lninvoice ? (
          <>
            <div className={`flex flex-row w-full justify-center`}>
              <ShakaQr
                basis={{
                  ...basis,
                  data: FundraiseShape.lninvoice,
                  size: 300,
                  cl: `text-accent-content`,
                }}
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
