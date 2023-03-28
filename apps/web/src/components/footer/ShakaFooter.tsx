import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaFooter = {
  basis: TypesShakaBasis & TypesFiguresShakaFooter;
};

export type TypesFiguresShakaFooter = {
  cl?: string;
  bg?: string;
};

export const ShakaFooter: React.FC<TypesShakaFooter> = ({
  basis,
}: TypesShakaFooter) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div
      className={`flex ${
        basis.bg || `bg-primary`
      } px-4 pt-8 lg:pt-0 pb-8 lg:pb-0 lg:px-8 `}
    >
      <div
        className={`flex flex-col space-y-6 lg:space-y-0 lg:flex-row w-full lg:h-full lg:h-24 border-t-2 lg:border-t-[1.5px] border-t-white lg:justify-between`}
      >
        <div
          className={`flex flex-col space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row w-full lg:w-auto max-lg:pt-8 lg:h-full lg:items-center`}
        >
          <div className={`flex flex-row`}>
            <p
              className={`font-apercu font-medium max-xl:text-xl text-lg text-white `}
            >
              {`${t(`footer:`, `shaka`)}.`}
            </p>
          </div>
          <div className={`flex flex-row `}>
            <p className={`font-apercu font-medium text-lg text-white `}>
              {`${t(`glossary:copyright`, `copyright`)} 2023.`}
            </p>
          </div>
          <div className={`flex flex-row `}>
            <p className={`font-apercu font-medium text-lg text-white `}>
              {`${t(`glossary:all_rights_reserved`, `all_rights_reserved`)}.`}
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col space-x-0 space-y-2 lg:space-y-0 lg:space-x-4 lg:flex-row lg:h-full lg:items-center `}
        >
          <div className={`flex flex-row space-x-4 `}>
            <p className={`font-apercu font-medium text-lg text-white`}>
              {`${t(`glossary:made_with_love_in`, `made_with_love_in`)}`}
            </p>
            <span className={`fi fi-cr`} />
          </div>
          <div className={`flex flex-row`}>
            <p className={`font-apercu font-medium text-lg text-white italic`}>
              {`${t(`footer:`, `Pura Vida!`)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
 <div className={`flex flex-col w-full px-8 `}>
        <div
          className={`flex flex-col w-full h-full  `}
        >
          <div
            className={`group flex max-md:flex-col flex-row w-full h-full xl:items-center justify-between py-4`}
          >
            <div
              className={`flex max-md:flex-col max-xl:space-y-2 flex-row max-xl:flex-auto flex-1 max-xl:pb-4`}
            >
              
            
             
            </div>

            <div
              className={`flex max-xl:flex-col flex-row max-xl:w-full w-auto max-xl:space-y-2 max-xl:py-10`}
            >
              <div
                className={`flex flex-row max-xl:w-full w-auto items-center space-x-4 `}
              >
            
              </div>

              <div className={`flex flex-row max-xl:w-full w-auto xl:pl-4`}>
            
              </div>
            </div>
          </div>
        </div>
      </div>


*/
