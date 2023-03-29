import { all } from "./all";
import { health } from "./health";
import { TypesControllers } from "./types";
import { webhooksmailgun } from "./webhooks/mailgun";
import { webhooksvoltage } from "./webhooks/voltage";

export const controllers: TypesControllers = {
  all,
  index: all,
  health,
  webhooks: {
    mailgun: webhooksmailgun,
    voltage: webhooksvoltage,
  },
};
