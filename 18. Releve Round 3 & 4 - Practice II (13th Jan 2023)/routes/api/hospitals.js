const controller = require("../../controllers/hospitalsController")
const router = require("express").Router()

// Matches with "/hospital"
router.route("/")
    .get(controller.findAll)
    .post(controller.create);

// Matches with "/hospital/:id"
router.route("/:id")
    .delete(controller.remove)
    .get(controller.findById)
    .put(controller.update);
module.exports = router;