const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: 'sd3018095@gmail.com',
        pass: 'iowmwhrcmiixlkwz'
    }
    
})
