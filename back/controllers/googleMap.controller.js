const Service = require("../services/googleMap.service");

const methods = {
  async onGetDirections(req, res) {
    try {
      let result = await Service.findDirections(req);
      res.success(result);
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
