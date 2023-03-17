import { useNavigate } from "react-router-dom";

const HomeHooks = () => {

    let navigate = useNavigate();

    const handleSubmit = (origin,destiny,type) => {
        console.log(origin,destiny,type)
        // navigate('/result')
    };

    return { handleSubmit };
}

export default HomeHooks;