import { useNavigate } from "react-router-dom";

const HomeHooks = () => {
    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/result')
    }

    return {
        handleSubmit
    }
}

export default HomeHooks;