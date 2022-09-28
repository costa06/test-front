import React from 'react';
import Menu from '../header/Menu';
import HomeBottom from './HomeBottom';
import Sidebar from './Sidebar';
import TopSelection from './TopSelection';

const Home = () => {
    return (
        <section className='home'>
            <div className='container'>
                <div className='home__wrapper'>
                    <Menu/>
                    <div className='selectionHome'>
                        <TopSelection/>
                        <HomeBottom/>
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </section>
    );
}

export default Home;
