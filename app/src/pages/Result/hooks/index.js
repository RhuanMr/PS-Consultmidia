import { useNavigate } from "react-router-dom";

const ResultHooks = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return {
        handleClick
    }
}

export default ResultHooks;