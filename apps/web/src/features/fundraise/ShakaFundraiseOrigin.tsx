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

        <div className={`flex flex-col w-full space-y-2 pb-24`}>
          <div
            className={`flex flex-row w-full items-center justify-center space-x-4 pt-4`}
          >
            <div className={`flex text-white`}>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                viewBox={"0 0 24 24"}
                fill={"currentColor"}
                className={"w-6 h-6"}
              >
                <path
                  fillRule={"evenodd"}
                  d={
                    "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  }
                  clipRule={"evenodd"}
                />
              </svg>
            </div>
            <p
              className={`font-apercu font-medium text-3xl text-white font-bold `}
            >
              {`Lightning Donation`}
            </p>
            <div className={`flex text-white`}>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                viewBox={"0 0 24 24"}
                fill={"currentColor"}
                className={"w-6 h-6"}
              >
                <path
                  fillRule={"evenodd"}
                  d={
                    "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  }
                  clipRule={"evenodd"}
                />
              </svg>
            </div>
          </div>
          <div className={`flex flex-col w-full pt-8 px-8 items-center  `}>
            <div
              className={`flex flex-col rounded min-h-120 lg:w-120 py-6 px-4 space-y-3 bg-[#FDFCFE]`}
            >
              <div
                className={`flex flex-col rounded w-full h-36 px-4 bg-secondary opacity-80 justify-center items-center`}
              >
                <div className={`flex flex-row h-20 flex-1`}>
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
                    className={`flex flex-row w-full h-full items-center justify-center`}
                  >
                    <input
                      type={"text"}
                      placeholder={
                        FundraiseShape.moneykind === `btc` ? `40,000` : `10`
                      }
                      className={`input input-ghost w-[${
                        FundraiseShape.moneykind === `btc` ? `170px` : `80px`
                      }] font-apercu font-medium text-4xl placeholder:text-white placeholder:text-start text-white focus:bg-transparent focus:outline-0`}
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
                  <div className={`flex flex-row w-full justify-center`}>
                    <ShakaQr
                      basis={{
                        ...basis,
                        data: FundraiseShape.lninvoice,
                        size: 300,
                        cl: `text-secondary-content`,
                      }}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <ShakaFooter basis={{ ...basis, bg: `bg-secondary` }} />
      <div className={"w-[80px] w-[170px]"} />
    </>
  );
};
