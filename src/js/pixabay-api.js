import axios from 'axios';

export function getImage(userValue){
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '48836479-4489c2f77adf14865904c6664',
        q: userValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${BASE_URL}?${params}`;
    
    return axios.get(url)
        .then(response => {
            if (response.data.hits.length === 0) {
                return [];
            }
            return response.data.hits;
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            throw error;
        });
}