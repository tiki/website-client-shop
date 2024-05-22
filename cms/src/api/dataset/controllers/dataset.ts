/**
 * dataset controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::dataset.dataset",
  ({ strapi }) => ({
    async find(ctx) {
      const entries = await strapi.db.query("api::dataset.dataset").findMany({
        where: {
          customer: {
            domain: ctx.req.customer.domain,
          },
        },
        populate: { customer: true },
      });

      const sanitizedResults = await this.sanitizeOutput(entries, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
