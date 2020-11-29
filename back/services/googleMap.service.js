const axios = require("axios"),
  config = require("../configs/app"),
  key = config.keyGoogle;

const methods = {
  findDirections(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const origin = req.query.origin;
        const destination = req.query.destination;
        let query = encodeURI(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${key}`
        );
        let data = await axios
          .get(`${query}`)
          .then((res) => res)
          .catch((error) => {
            throw error;
          });
        let replace = "enc:";
        const route = data.data.routes[0]
        replace += route.overview_polyline.points.replace(
          /[//]/g,
          "/"
        );

        resolve({
          result: {
            point: encodeURIComponent(replace),
            distance: route.legs[0].distance,
            duration: route.legs[0].duration,
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  error(msg, status = 500) {
    let error = new Error(msg);
    error.status = status;
    return error;
  },
};

module.exports = { ...methods };
