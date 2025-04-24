
import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import axios from 'axios';

function Contact() {
   const [inputUser , setInputUser] = useState({
    userName : "",
    userEmail : "",
    userMessage : "",
   })
    const [submitted, setSubmitted] = useState(false);

    const submiteUser = async () =>{
        try{
            const respons = await axios.post('https://jsonplaceholder.typicode.com/users' , inputUser)
            console.log(respons)
        }
        catch(err){
            console.error("خطا در دریافت اطلاعات " , err)
        }
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        submiteUser();
    };

    return (
        <div className="contact-page">
            <Navbar/>
            <h1>تماس با ما</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">نام</label>
                    <input
                        type="text"
                        id="name"
                        value={inputUser.userName}
                        onChange={(e) => setInputUser({...inputUser , userName: e.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">ایمیل</label>
                    <input
                        type="email"
                        id="email"
                        value={inputUser.userEmail}
                        onChange={(e) => setInputUser({...inputUser,userEmail: e.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">پیام</label>
                    <textarea
                        id="message"
                        value={inputUser.userMessage}
                        onChange={(e) => setInputUser({...inputUser,userMessage: e.target.value})}
                        required
                    ></textarea>
                </div>
                <button type="submit">ارسال</button>
            </form>

            {submitted && (
                <div className="success-message">
                    <p>پیام شما با موفقیت ارسال شد! متشکریم.</p>
                </div>
            )}
        </div>
    );
}

export default Contact;
