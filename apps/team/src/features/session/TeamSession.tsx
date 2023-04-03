import { ShakaFooter } from "@shaka-team-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-team-components/navigation/ShakaNavigation";
import { useLocale } from "@shaka-team-hooks/use-locale";
import { useShakaGraphTeamSessionHydrateQuery } from "@shaka-team-library/graph/hooks";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { DateTime } from "luxon";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesTeamSession = {
  basis: TypesShakaBasis;
};

export const TeamSession: React.FC<TypesTeamSession> = ({
  basis,
}: TypesTeamSession) => {
  useTranslation(basis.dictionary);

  const locale = useLocale();
  const router = useRouter();

  const {
    data: graphTeamSessionHydrated,
    loading: graphTeamSessionHydratel,
    error: graphTeamSessionHydratee,
  } = useShakaGraphTeamSessionHydrateQuery({
    variables: {
      figure: {
        locale,
      },
    },
  });

  return (
    <>
      <Head>
        <title>{`SHAKA TEAM${
          graphTeamSessionHydratel ? ` ... loading` : ``
        }`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-secondary min-h-screen overflow-hidden`}
      >
        <div className={`flex flex-row w-full justify-center`}>
          <ShakaNavigation basis={{ ...basis, bg: `bg-secondary` }} />
        </div>

        <div className={`flex flex-col w-full px-4`}>
          {graphTeamSessionHydratel ? (
            <>
              <div className={`flex flex-row w-full justify-center`}>
                <p className={`font-apercu font-medium text-base font-bold `}>
                  {`* loading *`}
                </p>
              </div>
            </>
          ) : null}
          {!graphTeamSessionHydratee ? (
            <>
              {graphTeamSessionHydrated?.ShakaGraphTeamSessionHydrate.pass ? (
                <>
                  <div className={`flex flex-col w-full py-4`}>
                    <div className={`flex flex-col lg:px-[30%]`}>
                      <div className={`flex flex-row w-full `}>
                        <p
                          className={`font-apercu font-medium text-base text-secondary-focus font-bold w-24 lg:w-20`}
                        >
                          {`hash:`}
                        </p>
                        <p
                          className={`font-apercu font-medium text-base text-secondary-focus font-bold truncate`}
                        >
                          {
                            graphTeamSessionHydrated
                              .ShakaGraphTeamSessionHydrate.hash
                          }
                        </p>
                      </div>

                      <div className={`flex flex-row w-full `}>
                        <p
                          className={`font-apercu font-medium text-base text-secondary-focus font-bold w-20 lg:w-20`}
                        >
                          {`ray:`}
                        </p>
                        <p
                          className={`font-apercu font-medium text-base text-secondary-focus font-bold truncate`}
                        >
                          {
                            graphTeamSessionHydrated
                              .ShakaGraphTeamSessionHydrate.ray
                          }
                        </p>
                      </div>

                      <div className={`flex flex-row w-full `}>
                        <p
                          className={`font-apercu font-medium text-base text-secondary-focus font-bold w-16 lg:w-20`}
                        >
                          {`time:`}
                        </p>
                        <p
                          className={`font-apercu font-medium text-base text-secondary-focus font-bold truncate`}
                        >
                          {`${DateTime.fromMillis(
                            Number(
                              graphTeamSessionHydrated
                                .ShakaGraphTeamSessionHydrate.timestamp
                            )
                          )
                            .setLocale(router.locale || locale)
                            .toLocaleString(DateTime.DATE_FULL)}`}
                        </p>
                      </div>
                    </div>

                    {graphTeamSessionHydrated?.ShakaGraphTeamSessionHydrate.data
                      ?.read ? (
                      <>
                        {graphTeamSessionHydrated?.ShakaGraphTeamSessionHydrate
                          .data.emails?.length ? (
                          <>
                            <div
                              className={`flex flex-col space-y-2 py-8 lg:px-[10%]`}
                            >
                              <div
                                className={`flex max-lg:flex-col flex-row w-full`}
                              >
                                <div className={`flex flex-row basis-1/4`} />

                                <div
                                  className={`flex flex-row basis-3/4 justify-center`}
                                >
                                  <p
                                    className={`font-apercu font-medium text-base text-secondary-focus font-bold`}
                                  >
                                    {`- Email -`}
                                  </p>
                                </div>

                                <div
                                  className={`flex flex-row basis-1/4 max-lg:justify-center justify-end`}
                                >
                                  <p
                                    className={`font-apercu font-medium text-base text-secondary-focus font-bold`}
                                  >
                                    {`${``}@shaka.website`}
                                  </p>
                                </div>
                              </div>

                              {graphTeamSessionHydrated?.ShakaGraphTeamSessionHydrate.data.emails.map(
                                (email) => {
                                  return (
                                    <div
                                      key={email.key}
                                      className={`grid grid-cols-16 gap-4 hover:bg-shaka-secondary_relief opacity-60 cursor-pointer py-2 px-3 rounded-lg`}
                                    >
                                      <div
                                        className={`max-lg:col-span-4 col-span-2 flex `}
                                      >
                                        <p
                                          className={`font-apercu font-medium text-base text-secondary-focus font-bold`}
                                        >
                                          {`${DateTime.fromMillis(
                                            Number(email.created)
                                          )
                                            .setLocale(router.locale || locale)
                                            .toLocaleString(
                                              DateTime.TIME_SIMPLE
                                            )}`}
                                        </p>
                                      </div>

                                      <div
                                        className={`max-lg:col-span-12 col-span-4 flex `}
                                      >
                                        <p
                                          className={`font-apercu font-medium text-base text-secondary-focus font-bold truncate`}
                                        >
                                          {email.address}
                                        </p>
                                      </div>

                                      <div
                                        className={`max-lg:col-span-15 col-span-10 flex`}
                                      >
                                        <div className={"collapse flex-1"}>
                                          <input type={"checkbox"} />
                                          <div
                                            className={
                                              "collapse-title flex flex-row text-xl font-medium w-full "
                                            }
                                          >
                                            <p
                                              className={`font-apercu font-medium text-base text-secondary-focus font-bold truncate`}
                                            >
                                              {email.records?.subject ||
                                                `(no subject)`}
                                            </p>
                                          </div>
                                          <div
                                            className={
                                              "collapse-content px-6 flex-1"
                                            }
                                          >
                                            <p
                                              className={`font-apercu font-medium text-base text-secondary-focus font-bold break-words`}
                                            >
                                              {email.records?.text}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
            </>
          ) : (
            <>
              <div className={`flex flex-row w-full`}>
                <p className={`font-apercu font-medium text-base font-bold `}>
                  {`Network error`}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <ShakaFooter basis={{ ...basis, bg: `bg-secondary` }} />
    </>
  );
};
