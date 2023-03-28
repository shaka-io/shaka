import I18nConfig from "../../next-i18next.config";
import { TypesConfiguration } from "./types";

export const configuration: TypesConfiguration = {
  GRAPH: {
    STATE_NAME: "_shaka_graph_",
  },
  I18N: {
    CONFIG: I18nConfig,
    DICTIONARY: {
      BASIS: [`common`, `glossary`],
      HOME: [`home`],
      FUNDRAISE: [`fundraise`],
    },
  },
  SOURCES: {
    MEDIA: "https://media.shaka.website/",
  },
};
