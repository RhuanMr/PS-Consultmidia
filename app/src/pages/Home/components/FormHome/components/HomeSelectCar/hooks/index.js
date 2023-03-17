import { useState } from "react";

const HomeSelectHooks = ({handleSelect}) => {
    const [isSelect, setIsSelect] = useState("");

    const handleClick = (value) => {
        setIsSelect(value);
        handleSelect(value);
    }

    return {
        isSelect,
        handleClick
    }
}

export default HomeSelectHooks;