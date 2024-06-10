import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/json/data.json') // JSON faylning to'liq yo'lini kiriting
            .then(response => response.json())
            .then(setData)
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="tweeper">
                <div className="navbar-first">
                    <div className="container">
                        <div className="navbar">
                            <Link to="/" className="logo">
                                <img src={data.logo.src} alt={data.logo.alt} />
                            </Link>
                            <ul className='navbar-item'>
                                {data.navbarItems.map((item, index) => (
                                    <Link to={item.path} className='navbar-item_info' key={index}>
                                        {item.label}<img src={item.icon.src} alt={item.icon.alt} />
                                    </Link>
                                ))}
                            </ul>
                            <Link to={data.login.path} id={data.login.id}>{data.login.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Layout;
