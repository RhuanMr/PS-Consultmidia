import React from 'react';
import './styles.css';
import ResultImage from './assets/resultImage.jpg'
import BasicPage from '../../components/BasicPage';
import ResultHooks from './hooks';
import { useLocation } from 'react-router-dom';

const Result = () => {
    const {state} = useLocation();
    const { value, distance } = state;
    const {
        handleClick
    } = ResultHooks();
    return(
        <BasicPage image={ResultImage}>
            <div className='containerResult'>
                <h1>Sucesso!!!</h1>
                <h2>{`Sua viagem de ${distance}`}</h2>
                <h2>foi aprovada no valor de</h2>
                <span>{`R$ ${value}`}</span>
                <button onClick={handleClick}>Aceitar</button>
            </div>
        </BasicPage>
    )
};

export default Result;
