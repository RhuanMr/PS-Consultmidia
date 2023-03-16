import React from "react";
import './styles.css';

const ButtonSelectHome = ({isSelected, type, image, handleClick}) => {
    if(isSelected === type){
        return(
            <button type="button" onClick={()=> handleClick("")} className='selectedButton'>
                <img src={image} alt='imageSelect' />
                <span>{type}</span>
            </button>
        )
    }
    return(
        <button type="button" onClick={() => handleClick(type)} className='normalSelectButton'>
            <img src={image} alt='imageSelect' />
            <span>{type}</span>
        </button>
    )
}

export default ButtonSelectHome;