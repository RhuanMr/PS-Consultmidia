import React from 'react';
import './styles.css';

const HomeTextInput = ({name, value, handleChange}) => (
    <div className='textInput'>
        <span>
            {
                name
            }
        </span>
        <input value={value} onChange={handleChange}/>
    </div>
)

export default HomeTextInput;