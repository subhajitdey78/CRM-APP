const notifationController = require("../controllers/ticketNotification.controller")

module.exports = function (app) {
    app.post("/notifiServ/api/notifications/", notifationController.acceptNotificationRequest)
    app.get("/notifiServ/api/notifications/:id", notifationController.getNotificationStatus)
}