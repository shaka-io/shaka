import { all } from "./all";
import { health } from "./health";
import { TypesControllers } from "./types";
import { voltagewebhooks } from "./voltage/webhooks";

export const controllers: TypesControllers = {
  all,
  index: all,
  health,
  voltagewebhooks,
};
