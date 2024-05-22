/**
 * dataset router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::dataset.dataset", {
  config: {
    find: {
      auth: false,
      middlewares: ["global::find-customer"],
    },
  },
});
