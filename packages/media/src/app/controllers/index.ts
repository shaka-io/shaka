import { controllershealth } from "./health";
import { TypesMediaControllers } from "./types";
import { controllersindex } from "./_";

export const controllers: TypesMediaControllers = {
  health: controllershealth,
  _: controllersindex,
};
