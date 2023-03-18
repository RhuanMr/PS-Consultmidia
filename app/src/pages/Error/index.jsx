import React from 'react';
import Header from '../../components/Header';
import ImageError from './assets/errorImage.jpg'
import './styles.css';

const Error = () => {
    return(
        <div className='containerError'>
            <div>
                <Header />
            </div>
            <div className='contentError'>
                <h1>Ops...</h1>
                <h2>Página Indisponível!</h2>
                <img src={ImageError} alt='Error' />
            </div>
        </div>
    )
}

export default Error;