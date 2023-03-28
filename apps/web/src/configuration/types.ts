import I18nConfig from "../../next-i18next.config";

export type TypesConfiguration = {
  GRAPH: {
    STATE_NAME: string;
  };
  I18N: {
    CONFIG: typeof I18nConfig;
    DICTIONARY: {
      BASIS: string[];
      HOME: string[];
      FUNDRAISE: string[];
    };
  };
  SOURCES: {
    MEDIA: string;
  };
};
