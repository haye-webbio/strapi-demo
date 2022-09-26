// @ts-nocheck
import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::page.page", ({ strapi }) => ({
  async search(...args) {
    throw new Error("Method not implemented.");
  },
}));
