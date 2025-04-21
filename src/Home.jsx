import React, { useState } from 'react';

import "./App.css";
import Navbar from './Navbar';


function Home() {
    const [message, setMessage] = useState('');
   
    const handleClick = () => {
        setMessage('سلام، خوش آمدید به صفحه‌ی خانه!');
    };

    return (

        <div className="home-content App" style={{ textAlign: 'center', padding: '20px' }}>
            <Navbar/>
            <h1>صفحه‌ی خانه</h1>
            <p>این یک صفحه‌ی ساده در React است.</p>
            <button onClick={handleClick}>دکمه را کلیک کن</button>
            {message && <p>{message}</p>}
        </div>
    );
}


export default Home;
