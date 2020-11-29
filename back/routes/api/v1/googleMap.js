const router = require("express").Router();
const controllers = require("../../../controllers/googleMap.controller");

router.get("/directions", controllers.onGetDirections);
module.exports = router;
