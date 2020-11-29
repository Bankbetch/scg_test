const Service = require("../services/bc.service");

const methods = {
  async onGetBC(req, res) {
    try {
      let result = await Service.calculateBC(req);
      res.success(result);
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
