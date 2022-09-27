"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService("api::page.page", ({ strapi }) => ({
    async helloWorld() {
        return "Hello world";
    },
}));
