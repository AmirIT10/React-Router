import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

import "./App.css";
import Navbar from './Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';


function Home() {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState([]);
    const [addUser, setAddUser] = useState({
        userName: "",
        userEmail: "",
    });
        const { userid } = useParams();
    
    useEffect(() => {

        const fetchdata = async () => {

            try {
                const data = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUser(data.data);

                console.log(data)

            } catch (err) {
                console.log('اطلاعاتی دریافت نشد', err)
            }
        }


        fetchdata();

    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                const respons = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
                setAddUser({
                    userName: respons.data.name,
                    userEmail: respons.data.email,
                });
            } catch (err) {
                console.error('oxhhh', err);
            }
        }
    
        getData();
    }, []);
    
    const handleClick = () => {
        setMessage('سلام، خوش آمدید به صفحه‌ی خانه!');
    };

    const handleEdite = ()=>{

    }
    const handledelete = (itemid) => {
        Swal.fire({
            title: 'آیا مطمئنی؟',
            text: "این کار قابل بازگشت نیست!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'بله، حذفش کن!',
            cancelButtonText: 'نه، بی‌خیال',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${itemid}`)
                    .then(res => {
                        Swal.fire(
                            'حذف شد!',
                            'آیتم با موفقیت حذف شد.',
                            'success'
                        );
                    })
                    .catch(err => {
                        Swal.fire(
                            'خطا!',
                            'مشکلی در حذف پیش اومد.',
                            'error'
                        );
                    });
            }
        });
    };


    return (

        <div className="home-content App" style={{ textAlign: 'center', padding: '20px' }}>
            <Navbar />
            <h1>صفحه‌ی خانه</h1>
            <p>این یک صفحه‌ی ساده در React است.</p>
            {user.length ?
                user.map((item) => (
                    <ul style={{ display: 'flex', justifyContent: "center", gap: "60px", alignItems: 'flex-start', backgroundColor: 'green' }}>
                        <li>
                            {item.id}
                        </li>
                        <li>
                            {item.name}
                        </li>
                        <li>
                            {item.email
                            }
                        </li>
                        <li>
                            <button onClick={() => handledelete(item.id)} >
                                حذف اطلاعات
                            </button>
                        </li>

                        <Link to={`/adduser/${item.id}`}>
                            <button>ویرایش کردن یوزر </button>
                        </Link>


                    </ul>
                ))
                :
                <h4>لطفان صبر کنید </h4>
            }
            <button onClick={handleClick}>دکمه را کلیک کن</button>
            {message && <p>{message}</p>}
        </div>
    );
}


export default Home;
