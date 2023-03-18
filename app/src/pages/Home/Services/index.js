import { DISTANCE_API } from "../Constants";
import axios from 'axios';
const API_KEY = 'AIzaSyBJfzCkYYeVGZPYaaYLBxZV1HweI8gp3wU';

export const getDistance = async (origin,destiny) => {
    const url = DISTANCE_API + destiny + '&origins=place_id:' + origin + '&key=' + API_KEY ;


      
    const response = await axios.get(url)
    return response.data
}