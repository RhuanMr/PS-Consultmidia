import React from 'react';
import Header from '../Header';
import './styles.css';

const BasicPage = ({children}) => {

    return(
        <div className='containerPage'>
            <div className='leftConatiner'>
                <Header />
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