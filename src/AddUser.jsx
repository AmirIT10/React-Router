
import React, { useState } from 'react';
import { useParams, Outlet, useNavigate, data } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';





function AddUser() {
    const [addUser, setAddUser] = useState({
        userName: "",
        userEmail: "",
    });

    const { userid } = useParams();
    const Navigate = useNavigate();

    console.log(addUser)

    const submitUser = async () => {
        try {

            const respons = await axios.post('https://jsonplaceholder.typicode.com/users', addUser);
            console.log(respons)
        }
        catch(error) {
            console.error('error', error)
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submitUser();
    }



    return (
        <div style={{ padding: '30px' }}>
            <Navbar />

            <h2>{userid ? "ویرایش کاربر " : "افزودن کاربر"}</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>نام:</label>
                    <input
                        type="text"
                        value={addUser.userName}
                        onChange={(e) => setAddUser({ ...addUser, userName: e.target.value })}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>ایمیل:</label>
                    <input
                        type="email"
                        value={addUser.userEmail}
                        onChange={(e) => setAddUser({ ...addUser, userEmail: e.target.value })}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>{userid ? "ویرایش" : "افزودن"}</button>

                {/* با استفاده از نویگیت میتوانیم فرایند های بازگشت به صفحات یا رفتن به صفحات رفت در حالی که ویژگی انجام ی فرایند قلا از کلیک کردن داره */}
                <button style={{ padding: '10px 20px', backgroundColor: "red" }} onClick={() => {
                    return (Navigate(-1))
                }}> بازگشت</button>
            </form>
            <Outlet />
        </div>
    );
}

export default AddUser;
