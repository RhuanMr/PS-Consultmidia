import React, { useState } from "react";

const HomeSelectHooks = () => {
    const [isSelect, setSelect] = useState("Básico");

    const handleClick = (value) => {
        setSelect(value);
    }

    return {
        isSelect,
        handleClick
    }
}

export default HomeSelectHooks;