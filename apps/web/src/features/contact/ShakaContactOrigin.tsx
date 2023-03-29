import { ShakaFooter } from "@shaka-web-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-web-components/navigation/ShakaNavigation";
import { ShakaContactForm } from "@shaka-web-features/contact/form/ShakaContactForm";
import { useShape } from "@shaka-web-shapes/hooks";
import { ofRootShape } from "@shaka-web-shapes/root/RootShape";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesShakaContactOrigin = {
  basis: TypesShakaBasis;
};

export const ShakaContactOrigin: React.FC<TypesShakaContactOrigin> = ({
  basis,
}: TypesShakaContactOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const RootShape = useShape(ofRootShape);
  const router = useRouter();

  const lcShakaContactOriginToHome = React.useCallback(() => {
    //
    // @notes:
    router.back();

    // end
    return;
  }, [router]);

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
            click: lcShakaContactOriginToHome,
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
                    "M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                  }
                  clipRule={"evenodd"}
                />
              </svg>
            </div>
            <p
              className={`font-apercu font-medium text-3xl text-white font-bold `}
            >
              {`${t(`glossary:get_in_touch`, `get_in_touch`)}`}
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
                    "M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                  }
                  clipRule={"evenodd"}
                />
              </svg>
            </div>
          </div>
          <div className={`flex flex-col w-full pt-8 px-8 items-center  `}>
            <ShakaContactForm basis={{ ...basis }} />
          </div>
        </div>
      </div>
      <ShakaFooter basis={{ ...basis, bg: `bg-secondary` }} />
    </>
  );
};
