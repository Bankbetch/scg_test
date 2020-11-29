const router = require("express").Router();
const controllers = require("../../../controllers/xyz.controller");

router.post("/xyz", controllers.onGetXYZ);

module.exports = router;
