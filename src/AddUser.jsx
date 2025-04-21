
import React, { useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';




function AddUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { userid } = useParams();
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
        };
        console.log('کاربر اضافه شد:', newUser);


        setName('');
        setEmail('');
    };

    return (
        <div style={{ padding: '30px' }}>
            <Navbar/>

            <h2>{userid ? "ویرایش کاربر " : "افزودن کاربر"}</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>نام:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>ایمیل:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>{userid ? "ویرایش" : "افزودن"}</button>

                {/* با استفاده از نویگیت میتوانیم فرایند های بازگشت به صفحات یا رفتن به صفحات رفت در حالی که ویژگی انجام ی فرایند قلا از کلیک کردن داره */}
                <button  style={{ padding: '10px 20px' , backgroundColor:"red" }} onClick={()=>{
                    return(Navigate(-1))
                }}> بازگشت</button>
            </form>
            <Outlet />
        </div>
    );
}

export default AddUser;
