const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: 'deysubhajit789@gmail.com',
        pass: 'bujzlliuhvujepsk'
    }
})