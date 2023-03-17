import React from 'react';
import Autocomplete from "react-google-autocomplete";
import './styles.css';

const HomeTextInput = ({name, handleChange}) => (
    <div className='textInput'>
        <span>
            {
                name
            }
        </span>
        <Autocomplete
            apiKey={"AIzaSyBJfzCkYYeVGZPYaaYLBxZV1HweI8gp3wU"}
            onPlaceSelected={(place) => {
                handleChange(place);
            }}
        />
    </div>
)

export default HomeTextInput;