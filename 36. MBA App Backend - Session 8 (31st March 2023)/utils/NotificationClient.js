const Client = require('node-rest-client').Client

const client = new Client();

exports.client = client;
exports.sendEmail = (ticketId, subject, content, emailsIds, requester) => {
    let reqBody = {
        subject: subject,
        content: content,
        recepientEmials: emailsIds,
        requester: requester,
        ticketId: ticketId
    }
    let args = {
        data : reqBody,
        Headers: {"Content-Type": "application/json"}
    }

    client.post("http://localhost:3030/notifiServ/api/notifications", 
    args, function (data, response) {
        console.log("Request sent");
        console.log(data);
    })

}