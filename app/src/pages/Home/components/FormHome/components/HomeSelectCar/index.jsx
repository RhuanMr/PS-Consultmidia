import React from 'react';
import BasicCar from '../../../../assets/car-side-view.png';
import LuxuryCar from '../../../../assets/sport-car-side-view.png';
import CommumCar from '../../../../assets/4x4-car-side-view.png';
import './styles.css';
import ButtonSelectHome from './components/buttonSelectHome';
import HomeSelectHooks from './hooks';

const HomeSelectCar = ({handleSelect}) => {
    const {
        isSelect,
        handleClick
    } = HomeSelectHooks({handleSelect});
    return(
        <div className='homeSelectCar'>
            <span>Tipo de carro</span>
            <div className='selectContainer'>
                <ButtonSelectHome handleClick={handleClick} isSelected={isSelect} image={BasicCar} type="Básico" />
                <ButtonSelectHome handleClick={handleClick} isSelected={isSelect} image={CommumCar} type="Intermediário" />
                <ButtonSelectHome handleClick={handleClick} isSelected={isSelect} image={LuxuryCar} type="Luxo" />
            </div>
        </div>
    )
}

export default HomeSelectCar;