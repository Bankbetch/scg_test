const Service = require("../services/xyz.service");

const methods = {
  async onGetXYZ(req, res) {
    try {
      let result = await Service.calculateXYZ(req);
      res.success(result);
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
