import React from 'react';
import Header from '../Header';
import './styles.css';

const BasicPage = ({children, image}) => {

    return(
        <div className='containerPage'>
            <div className='leftConatiner'>
                <Header />
                {
                    image && (
                        <div className='imageLeftContent'>
                            <img src={image} alt='leftImage' />
                        </div>
                    )
                }
            </div>
            <div className='rightContainer'>
                {
                    children
                }
            </div>
        </div>
    )
};

export default BasicPage;