// @ts-nocheck
import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::page.page", ({ strapi }) => ({
  async helloWorld() {
    return "Hello world";
  },
}));
