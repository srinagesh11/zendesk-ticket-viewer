import axios from 'axios';

class TicketService {

    getTickets(){
        return axios.get("/api/tickets")
    }
}

export default new TicketService()