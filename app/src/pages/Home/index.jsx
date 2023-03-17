import React from 'react';
import BasicPage from '../../components/BasicPage';
import ImageHome from './assets/imageHome.jpg'
import HomeForm from './components/FormHome';
import HomeHooks from './hooks';
import './styles.css';

const Home = () => {
    const { handleSubmit } = HomeHooks();
    return(
        <BasicPage image={ImageHome}>
            <div className='containerHome'>
                <h1>Formulário</h1>
                <HomeForm handleSubmit={handleSubmit} />
            </div>
        </BasicPage>
    )
}

export default Home;