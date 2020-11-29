const router = require("express").Router();
const controllers = require("../../../controllers/bc.controller");

router.post("/bc", controllers.onGetBC);

module.exports = router;
