'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  populate: async (params) => {
    const cat = await strapi.services.category.find({ name: "Action" })

    console.log(cat)
  }
};
