const theatreController = require("../controllers/threatre.controller");

/**
 * Routes for the movie resource
 */

module.exports = function (app) {
    app.get("/mba/api/theatres", theatreController.getAllTheatres);
    app.get("/mba/api/theatre/:id", theatreController.getTheatre);
    app.post("/mba/api/theatres", theatreController.createTheatre);
    app.put("/mba/api/theatre/:id", theatreController.updateTheatre);
    app.delete("/mba/api/theatre/:id", theatreController.deleteTheatre)
}