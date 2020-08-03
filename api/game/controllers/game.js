'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    console.log("Starting to populate...")

    await strapi.services.game.populate()

    ctx.send("Finished populating!")
  }
};
