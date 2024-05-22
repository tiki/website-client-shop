/**
 * legal-compliance router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::legal-compliance.legal-compliance', {
    config: {
      find: {
        auth: false,
        middlewares: ["global::find-customer"],
      },
    },
  });
