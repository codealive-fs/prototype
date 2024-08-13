'use strict';

/**
 * loginuser service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loginuser.loginuser');
