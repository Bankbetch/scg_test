const Service = require("../services/lineWebhook.service");

const methods = {
  async onSendMessage(req, res) {
    try {
      let result = await Service.sendMessage(req);
      res.success(result);
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
