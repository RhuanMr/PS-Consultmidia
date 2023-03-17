import React from 'react';
import './styles.css';
import ResultImage from './assets/resultImage.jpg'
import BasicPage from '../../components/BasicPage';

const Result = () => {
    return(
        <BasicPage image={ResultImage}>
            <div className='containerResult'>
                <h1>Sucesso!!!</h1>
                <h2>{`Sua viagem de ${48}km`}</h2>
                <h2>foi aprovada no valor de</h2>
                <span>{`R$ ${500}`}</span>
            </div>
        </BasicPage>
    )
};

export default Result;
