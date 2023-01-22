const authController = require("../controllers/auth.contoller")

module.exports = function (app) {
    app.post('/hiring/auth/signup/:role', authController.signUp)
    app.post('/hiring/auth/signin/:role', authController.signIn)
}