import { SatoshiV2Icon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { ShakaFooter } from "@shaka-web-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-web-components/navigation/ShakaNavigation";
import { ShakaQr } from "@shaka-web-components/qr/ShakaQr";
import { useLocale } from "@shaka-web-hooks/use-locale";
import { useShakaGraphLnInvoiceCreateMutation } from "@shaka-web-library/graph/hooks";
import {
  ofFundraiseShape,
  TypesFundraiseShapeMoneyKind,
  writeFundraiseShapeEntracteFalse,
  writeFundraiseShapeEntracteTrue,
  writeFundraiseShapeLnInvoice,
  writeFundraiseShapeMoneyKind,
} from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { ofRootShape } from "@shaka-web-shapes/root/RootShape";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesShakaFundraiseOrigin = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseOrigin: React.FC<TypesShakaFundraiseOrigin> = ({
  basis,
}: TypesShakaFundraiseOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const RootShape = useShape(ofRootShape);
  const FundraiseShape = useShape(ofFundraiseShape);

  const router = useRouter();

  const locale = useLocale();
  const [lnInvoiceGenerate] = useShakaGraphLnInvoiceCreateMutation();

  const lcShakaFundraiseOriginToHome = React.useCallback(() => {
    //
    // @notes:
    router.back();

    // end
    return;
  }, [router]);

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

  const lcaShakaFundraiseOriginGenerateLnInvoice =
    React.useCallback(async () => {
      //
      // @notes:

      //
      // conditions

      // error false
      // fold()

      // loading start
      fold(writeFundraiseShapeEntracteTrue());

      fold(writeFundraiseShapeLnInvoice(``));

      //
      // run
      const run = async () => {
        try {
          //
          // start

          const { data } = await lnInvoiceGenerate({
            variables: {
              figure: {
                locale,
                satoshis: `10`,
              },
            },
          });

          if (
            data &&
            data.ShakaGraphLnInvoiceCreate.pass &&
            data.ShakaGraphLnInvoiceCreate.data?.ln
          ) {
            fold(
              writeFundraiseShapeLnInvoice(
                data.ShakaGraphLnInvoiceCreate.data.ln
              )
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
    }, [fold, lnInvoiceGenerate, locale]);

  return (
    <>
      <Head>
        <title>{`SHAKA${!RootShape.networkfound ? ` ... loading` : ``}`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-secondary min-h-screen overflow-hidden`}
      >
        <ShakaNavigation
          basis={{
            ...basis,
            bg: `bg-secondary`,
            click: lcShakaFundraiseOriginToHome,
          }}
        />

        <div className={`flex flex-col w-full space-y-2`}>
          <div className={`flex flex-row w-full h-12 justify-center`}>
            <p
              className={`font-apercu font-medium text-xl text-white font-bold `}
            >
              {`Lightning Donation`}
            </p>
          </div>
          <div className={`flex flex-col w-full px-8 `}>
            <div
              className={`flex flex-col rounded min-h-120 py-6 px-4 space-y-3 bg-[#FDFCFE]`}
            >
              <div
                className={`flex flex-col rounded w-full h-36 px-4 bg-secondary opacity-80 justify-center items-center`}
              >
                <div className={`flex flex-row h-20 `}>
                  <div
                    className={`flex w-12 h-full items-center justify-center`}
                  >
                    {FundraiseShape.moneykind === `btc` ? (
                      <>
                        <div className={`flex flex-row items-center`}>
                          <SatoshiV2Icon
                            style={{
                              height: "48px",
                              width: "48px",
                              color: "#ffffff",
                            }}
                          />
                        </div>
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
                    className={`flex flex-row h-full items-center justify-center`}
                  >
                    <input
                      type={"text"}
                      placeholder={
                        FundraiseShape.moneykind === `btc` ? `1000000` : `10`
                      }
                      className={`input input-ghost w-[190px] font-apercu font-medium text-4xl placeholder:text-white placeholder:text-start text-white focus:bg-transparent focus:outline-0`}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-row rounded w-full h-12 bg-secondary opacity-80 items-center justify-between space-x-3 px-2`}
              >
                <button
                  className={`btn btn-sm btn-secondary bg-[#EFE6F3] flex-1 font-apercu opacity-70 text-opacity-50 focus:text-white`}
                  onClick={() => lcShakaFundraiseOriginToggleMoneyKind("btc")}
                >
                  {"Bitcoin"}
                </button>
                <button
                  className={`btn btn-sm btn-secondary bg-[#EFE6F3] flex-1 font-apercu opacity-70 text-opacity-50 focus:text-white`}
                  onClick={() => lcShakaFundraiseOriginToggleMoneyKind("fiat")}
                >
                  {"Fiat"}
                </button>
              </div>

              <div
                className={`flex flex-row rounded w-full h-12 bg-secondary items-center opacity-80 px-2`}
              >
                <button
                  className={`btn btn-sm btn-secondary bg-[#EFE6F3] flex-1 font-apercu opacity-70 text-opacity-50 focus:text-white ${
                    FundraiseShape.entracte ? `loading` : ``
                  }`}
                  onClick={lcaShakaFundraiseOriginGenerateLnInvoice}
                >
                  {`${t(`glossary:generate`, `generate`)}`}
                </button>
              </div>

              {FundraiseShape.lninvoice ? (
                <>
                  <ShakaQr
                    basis={{
                      ...basis,
                      data: FundraiseShape.lninvoice,
                      size: 300,
                      cl: `text-secondary-content`,
                    }}
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <ShakaFooter basis={{ ...basis, bg: `bg-secondary` }} />
    </>
  );
};
