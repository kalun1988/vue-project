import axios from 'axios';

import {APIService} from '@/services/APIService';

// export class SRB_APIService extends APIService{
//     constructor(API_BASE_URL){
//         super(API_BASE_URL);
//     }
//     getFloorPlans(pk) {
//         const url = `${this.API_BASE_URL}/api/contacts/${pk}`;
//         return axios.get(url).then(response => response.data);
//     }

// }


export class SRB_APIService extends APIService {
    constructor(api_base_url) {
        super(api_base_url);
    }

    getAreas() {
        const url = `${this.api_base_url}/todos/1`;
        return axios.get(url).then(response => response.data);
    }

}
