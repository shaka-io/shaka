import { ShakaContactFormContent } from "@shaka-web-features/contact/form/content/ShakaContactFormContent";
import { ShakaContactFormEmail } from "@shaka-web-features/contact/form/email/ShakaContactFormEmail";
import { ShakaContactFormName } from "@shaka-web-features/contact/form/name/ShakaContactFormName";
import {
  ofContactShape,
  TypesContactShapeThread,
  writeContactShapeEntracteFalse,
  writeContactShapeEntracteTrue,
  writeContactShapeInverseFalse,
  writeContactShapeInverseTrue,
} from "@shaka-web-shapes/contact/ContactShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaContactForm = {
  basis: TypesShakaBasis;
};

export const ShakaContactForm: React.FC<TypesShakaContactForm> = ({
  basis,
}: TypesShakaContactForm) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const ContactShape = useShape(ofContactShape);

  const lcaShakaContactFormSubmit = React.useCallback(async () => {
    //
    // @notes:

    let th: TypesContactShapeThread;

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

        console.log(`run`);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(`complete`);

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
    ContactShape.bundles.ContactContent.pass,
    ContactShape.bundles.ContactEmail.pass,
    fold,
  ]);

  return (
    <>
      <div
        className={`flex flex-col rounded min-h-120 w-full lg:w-120 py-6 px-4 bg-white opacity-90 items-between space-y-3`}
      >
        <div className={`flex flex-col w-full space-y-3`}>
          <ShakaContactFormName basis={{ ...basis }} />
          <ShakaContactFormEmail basis={{ ...basis }} />
          <ShakaContactFormContent basis={{ ...basis }} />
        </div>

        <div className={`flex flex-col w-full space-y-6 `}>
          <div className={`flex flex-row w-full h-12 `}>
            <button
              className={`btn btn-secondary rounded  opacity-90 flex-1 font-apercu text-opacity-50 text-white focus:text-white hover:text-white ${
                ContactShape.entracte ? `loading` : ``
              }`}
              onClick={lcaShakaContactFormSubmit}
            >
              {`${t(`glossary:submit`, `submit`)}`}
            </button>
          </div>

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
          ) : null}
        </div>
      </div>
    </>
  );
};
