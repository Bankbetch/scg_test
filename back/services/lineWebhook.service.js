const { replyMessage, checkText } = require("../modules/LineWebhook");

const methods = {
  sendMessage(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await req.body.events.map(this.handleEvent);
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  },

  handleEvent(event) {
    if (event.type === "message" && event.message.type === "text") {
      replyMessage(event);
    } else {
      checkText(event);
    }
  },
  error(msg, status = 500) {
    let error = new Error(msg);
    error.status = status;
    return error;
  },
};

module.exports = { ...methods };
