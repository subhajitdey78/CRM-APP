const profileController = require("../controllers/profile.contoller")
const authorization = require("../middlewares/authorization")

module.exports = (app) => {
    app.get("/hiring/profile/", authorization, profileController.getProfile)
    app.get("/hiring/profile/:id", authorization, profileController.getProfileById)
    app.patch("/hiring/profile/", authorization, profileController.updateProfile )
}