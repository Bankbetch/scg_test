const router = require("express").Router();

router.use("/", require("./xyz"));
router.use("/", require("./bc"));
router.use("/", require("./googleMap"));
router.use("/", require("./lineWebhook"));

module.exports = router;
