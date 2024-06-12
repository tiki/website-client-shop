/**
 * data-access router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::data-access.data-access", {
  config: {
    find: {
      auth: false,
      // middlewares: ["global::find-customer"],
    },
  },
});
