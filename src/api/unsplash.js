import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID lANw_cWlxnBGaqEbweoUPVUjGM9oKK680B82sP1WD2Q'
    }
});