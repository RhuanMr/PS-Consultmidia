import React from 'react';
import RightArrowIcon from '../../assets/rightArrowIcon.png';
import HomeSelectCar from './components/HomeSelectCar';
import HomeTextInput from './components/HomeTextInput';
import HomeFormHooks from './hooks';
import './styles.css';

const HomeForm = ({ handleSubmit }) => {
    const {
        setOrigin,
        setDestiny,
        setType,
        handleSubmited
    } = HomeFormHooks({ handleSubmit });

    return(
        <form onSubmit={handleSubmited} className='containerHomeForm'>
            <div className='upContentForm'>
                <HomeTextInput name="Origem" handleChange={setOrigin}/>
                <HomeTextInput name="Destino" handleChange={setDestiny}/>
            </div>
            <div className='downContentForm'>
                <HomeSelectCar handleSelect={setType} />
            </div>
            <button type='submit' className='NextButton'>
                <img src={RightArrowIcon} alt='NextImage'/>
            </button>
        </form>
    )
}

export default HomeForm;