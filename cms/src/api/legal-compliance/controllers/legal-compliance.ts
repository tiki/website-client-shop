/**
 * legal-compliance controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::legal-compliance.legal-compliance', ({ strapi }) => ({
    async find(ctx) {
      const entries = await strapi.db.query("api::legal-compliance.legal-compliance").findMany({
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
  }));
