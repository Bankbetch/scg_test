const router = require("express").Router();
const controllers = require("../../../controllers/lineWebhook.controller");

router.post("/webhook", controllers.onSendMessage);

module.exports = router;
