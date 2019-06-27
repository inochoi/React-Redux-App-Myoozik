import React from 'react';
import back from '../pineapple.png';
import Home from '../Home';

const Homepage = () => {
    let imgUrl = '../pineapple.png';
    return (
        <div className='home' style={{ backgroundImage: `url(${imgUrl})` }}>
            <Home type="home" />
            <h1>This is my Home page.</h1>

        </div>
    );
}

export default Homepage;