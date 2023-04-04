const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: 'deysubhajit78@gmail.com',
        pass: 'zqycwphvfdxhmqou'
    }
})