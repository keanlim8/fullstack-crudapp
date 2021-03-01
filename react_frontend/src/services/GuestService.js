import axios from 'axios';



const GUEST_API_BASE_URL = "http://localhost:8080/api/guests";

class GuestService {

    getGuests() {
        return axios.get(GUEST_API_BASE_URL);
    }

}

export default new GuestService()