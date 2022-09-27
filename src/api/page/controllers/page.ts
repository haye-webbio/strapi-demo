/**
 * page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async helloWorld() {
      return strapi.service("api::page.page").helloWorld();
    },
  })
);
