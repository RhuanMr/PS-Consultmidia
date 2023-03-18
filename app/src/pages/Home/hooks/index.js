import { useNavigate } from "react-router-dom";
import { valueFunction } from "../../../utils/valueFunctions";
import { getDistance } from "../Services";

const HomeHooks = () => {

    let navigate = useNavigate();

    const handleSubmit = async (origin,destiny,type) => {
            if(origin === "" || destiny === "" || type === ""){
                alert("É nescessário completar todos os campos!")
            } else {
                // const response = await getDistance(origin.place_id,destiny.place_id);
                // const distance = response.rows[0].elements[0].distance.value;
                // const distanceText = response.rows[0].elements[0].distance.text;
                const distance = 207387;
                const distanceText = "207 km";
                const value = valueFunction(distance, type);
                navigate('/result', {state: { value: value, distance: distanceText }});
            }
    };

    return { handleSubmit };
}

export default HomeHooks;