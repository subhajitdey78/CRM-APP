const Client = require("node-rest-client").Client

const client = new Client();

module.exports = (ticketId, subject, content, emailIds, requester) => {
    let reqBody = {
        "subject": subject,
        "ticketId": ticketId,
        "content": content,
        "receipientEmails": emailIds,
        "requested": requester
    }
   const args = {
    data: reqBody,
    headers: {"Content-Type": "application/json" }
   }

   client.post("http://localhost:3030/notifiserve/api/notifications/",
     args,
     (data, response) => {
        console.log("Request sent")
        console.log(data)
     }
   )
}

