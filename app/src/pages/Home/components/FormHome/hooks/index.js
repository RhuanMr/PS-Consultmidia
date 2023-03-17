import { useState } from "react";

const HomeFormHooks = ({ handleSubmit }) => {
    const [origin, setOrigin] = useState({});
    const [destiny, setDestiny] = useState({});
    const [type, setType] = useState("");


    const handleSubmited = (event) => {
        event.preventDefault();
        handleSubmit(origin,destiny,type);
    }

    return {
        setOrigin,
        setDestiny,
        setType,
        handleSubmited
    }
}

export default HomeFormHooks;