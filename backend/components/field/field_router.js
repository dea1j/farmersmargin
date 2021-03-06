const express = require("express");
const router = express.Router();

const { getFields, addField, helloWorld } = require("./field_controller");

router.route("/").post(addField);
router.route("/").get(helloWorld);
router.route("/:lon/:lat").get(getFields);

module.exports = router;
