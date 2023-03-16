import React from 'react';
import RightArrowIcon from '../../assets/rightArrowIcon.png';
import HomeSelectCar from './components/HomeSelectCar';
import HomeTextInput from './components/HomeTextInput';
import './styles.css';

const HomeForm = ({ handleSubmit }) => {
    return(
        <form onSubmit={handleSubmit} className='containerHomeForm'>
            <div className='upContentForm'>
                <HomeTextInput name="Origem"/>
                <HomeTextInput name="Destino"/>
            </div>
            <div className='downContentForm'>
                <HomeSelectCar />
            </div>
            <button type='submit' className='NextButton'>
                <img src={RightArrowIcon} alt='NextImage'/>
            </button>
        </form>
    )
}

export default HomeForm;