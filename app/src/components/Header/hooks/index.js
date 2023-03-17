import { useNavigate } from "react-router-dom";

const HeaderHooks = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return {
        handleClick
    }
}

export default HeaderHooks;