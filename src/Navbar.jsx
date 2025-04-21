import "./App.css";
import React from 'react';

import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const Navigate = useNavigate();
    console.log("annnnii");

    return (
        <div className="App">
            {/* هدر */}
            <header className="App-header">
                <nav>
                    {/* میتوانیم بجای تگ لینک زا سوز نویکیت استفاده کنیم باعث میشسه کد کوتاه تر ی فرایندی را قلا از کیلک کردن انجام داد و .. */}
                    <button onClick={
                        () => {
                            return (
                                //action
                                Navigate("/adduser")
                            )
                        }
                    }>
                        اضافه کردن یوزر
                    </button>

                    <Link to="/adduser/2">
                        <button>ویرایش کردن یوزر </button>
                    </Link>
                    <ul className="nav-list">
                        {/* NavLink هم همین کار رو می‌کنه، اما وقتی مسیر فعال باشه، یه کلاس مخصوص (active) بهش اضافه می‌کنه. */}
                        <li><NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/"> Home </NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                    </ul>
                    <input type="text" placeholder="جستجو..." className="search-box" />
                </nav>
            </header>




        </div>
    )
}

export default Navbar;