"use strict";
/**
 * page controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::page.page", ({ strapi }) => ({
    async helloWorld() {
        return strapi.service("api::page.page").helloWorld();
    },
}));
