import { ShakaContactFormContent } from "@shaka-web-features/contact/form/content/ShakaContactFormContent";
import { ShakaContactFormEmail } from "@shaka-web-features/contact/form/email/ShakaContactFormEmail";
import { ShakaContactFormName } from "@shaka-web-features/contact/form/name/ShakaContactFormName";
import { useLocale } from "@shaka-web-hooks/use-locale";
import { useShakaGraph0001Mutation } from "@shaka-web-library/graph/hooks";
import {
  initContactShape,
  ofContactShape,
  TypesContactShapeThread,
  writeContactShapeEntracteFalse,
  writeContactShapeEntracteTrue,
  writeContactShapeInverseFalse,
  writeContactShapeInverseTrue,
  writeContactShapeSubmitted,
  writeContactShapeSubmittedTime,
} from "@shaka-web-shapes/contact/ContactShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { useElapsedTime } from "use-elapsed-time";

export type TypesShakaContactForm = {
  basis: TypesShakaBasis;
};

export const ShakaContactForm: React.FC<TypesShakaContactForm> = ({
  basis,
}: TypesShakaContactForm) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const ContactShape = useShape(ofContactShape);

  const locale = useLocale();
  const [shaka0001] = useShakaGraph0001Mutation();

  const { reset: timereset } = useElapsedTime({
    isPlaying: ContactShape.submitted,
    duration: 3,
    onComplete: () => {
      fold(initContactShape());
      fold(writeContactShapeSubmittedTime());
    },
  });

  const lcaShakaContactFormSubmit = React.useCallback(async () => {
    //
    // @notes:

    timereset(0);

    let th: TypesContactShapeThread;

    const holdminutes = (Date.now() - ContactShape.submittedTime) / 1000;
    if (holdminutes < 60 * 3) {
      th = `glossary:please_allow_a_few_minutes_to_submit_another_question`;
      fold(writeContactShapeInverseTrue(th));
      return;
    }

    if (!ContactShape.bundles.ContactEmail.pass) {
      th = `glossary:please_use_a_valid_email`;
      fold(writeContactShapeInverseTrue(th));
      return;
    }

    if (!ContactShape.bundles.ContactContent.pass) {
      th = `glossary:please_write_3_words_minimum`;
      fold(writeContactShapeInverseTrue(th));
      return;
    }

    //
    // conditions

    // error false
    fold(writeContactShapeInverseFalse());

    // loading start
    fold(writeContactShapeEntracteTrue());

    //
    // run
    const run = async () => {
      try {
        //
        // start

        const { data: shaka0001d } = await shaka0001({
          variables: {
            figure: {
              locale,
              title: ContactShape.bundles.ContactName.letters,
              contact: ContactShape.bundles.ContactEmail.letters,
              content: ContactShape.bundles.ContactContent.letters,
            },
          },
        });

        if (shaka0001d?.ShakaGraph0001.pass) {
          fold(writeContactShapeSubmitted(true));
          return;
        }

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        fold(writeContactShapeEntracteFalse());
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [
    ContactShape.bundles.ContactContent.letters,
    ContactShape.bundles.ContactContent.pass,
    ContactShape.bundles.ContactEmail.letters,
    ContactShape.bundles.ContactEmail.pass,
    ContactShape.bundles.ContactName.letters,
    ContactShape.submittedTime,
    fold,
    locale,
    shaka0001,
    timereset,
  ]);

  return (
    <>
      <div
        className={`flex flex-col rounded-lg min-h-120 w-full lg:w-120 py-4 px-4 bg-white opacity-90 items-between space-y-3`}
      >
        <div className={`flex flex-col w-full space-y-3`}>
          <ShakaContactFormName basis={{ ...basis }} />
          <ShakaContactFormEmail basis={{ ...basis }} />
          <ShakaContactFormContent basis={{ ...basis }} />
        </div>

        <div className={`flex flex-col w-full space-y-6 `}>
          <div
            className={`flex flex-row rounded w-full h-12 bg-secondary items-center opacity-80 px-2`}
          >
            <button
              className={`btn btn-sm btn-secondary bg-shaka-secondary_relief flex-1 font-apercu text-opacity-50 focus:text-secondary-content hover:text-white opacity-80 ${
                ContactShape.entracte ? `loading` : ``
              }`}
              onClick={lcaShakaContactFormSubmit}
            >
              {`${t(`glossary:submit`, `submit`)}`}
            </button>
          </div>

          <div className={`flex h-36`}>
            {ContactShape.submitted ? (
              <>
                <div
                  className={`flex flex-row w-full text-secondary-focus space-x-4 px-4`}
                >
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    viewBox={"0 0 24 24"}
                    fill={"currentColor"}
                    className={"w-6 h-6"}
                  >
                    <path
                      fillRule={"evenodd"}
                      d={
                        "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      }
                      clipRule={"evenodd"}
                    />
                  </svg>
                  <div className={`flex flex-row pt-[2px]`}>
                    <p
                      className={`font-apercu font-medium text-base text-secondary-focus font-bold `}
                    >
                      {`${t(`glossary:thank_you`, `thank_you`)}, ${t(
                        `glossary:we_will_be_in_touch`,
                        `we_will_be_in_touch`
                      ).toLowerCase()}!`}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {ContactShape.inverse && ContactShape.thread ? (
                  <>
                    <div
                      className={`flex flex-row w-full text-secondary-focus space-x-4 px-4`}
                    >
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 24 24"}
                        fill={"currentColor"}
                        className={"w-6 h-6"}
                      >
                        <path
                          fillRule={"evenodd"}
                          d={
                            "M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                          }
                          clipRule={"evenodd"}
                        />
                      </svg>
                      <div className={`flex flex-row pt-[2px]`}>
                        <p
                          className={`font-apercu font-medium text-base text-secondary-focus font-bold `}
                        >
                          {`${t(
                            `${ContactShape.thread}`,
                            `${ContactShape.thread}`
                          )}.`}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`flex flex-row w-full justify-center pt-4 text-secondary `}
                    >
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 24 24"}
                        fill={"currentColor"}
                        className={"w-16 h-16 opacity-40"}
                      >
                        <path
                          d={
                            "M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"
                          }
                        />
                      </svg>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
