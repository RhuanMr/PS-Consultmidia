import { DISTANCE_API } from "../Constants";
const API_KEY = 'AIzaSyBJfzCkYYeVGZPYaaYLBxZV1HweI8gp3wU'

export const getDistance = async (origin,destiny) => {
    const url = DISTANCE_API + destiny + '&origins=place_id:' + origin + '&key=' + API_KEY ;

    try{
        const settings = { 
            method: 'GET',     
            mode: 'cors',    
            headers: new Headers({       'Content-Type': 'application/json'     })
        }
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json()
        return data;
    } catch(error) {
        return error;
    }
}
