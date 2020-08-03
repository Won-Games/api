'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: (ctx) => {
    console.log("Starting to populate...")

    console.log(ctx.query);

    ctx.send("Finished populating!")
  }
};
