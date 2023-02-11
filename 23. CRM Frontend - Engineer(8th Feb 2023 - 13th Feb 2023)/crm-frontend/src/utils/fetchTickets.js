import axios from "axios"
import updateTicketCounts from "./updateTicketCounts"

const BASE_URL = process.env.REACT_APP_SERVER_URL

const fetchTickets = async (localStorage, setTicketStatusCount) => {
    try {
    axios.get(BASE_URL + '/crm/api/tickets/',
        {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }, {
        'userId': localStorage.getItem('userId')
    })
}
catch {

 }

}

export default fetchTickets