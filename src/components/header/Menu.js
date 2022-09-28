import React from 'react';

const Menu = () => {
    const MainNav = [
        {
            title: "Value of the Day",
            link : "#",
            className :"bold"
        },
        {
            title: "Top 100 Offers",
            link : "#",
            className :"bold"
        },
        {
            title: "New Arrivals",
            link : "#",
            className :"bold"
        },
        {
            title: "Laptops & Computers",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Cameras & Photography",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Smart Phones & Tablets",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Video Games & Consoles",
            link : "#",
            className :"dropdown"
        },
        {
            title: "TV & Audio",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Gadgets",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Car Electronic & GPS",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Printers & Inks",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Portable Audio",
            link : "#",
            className :"dropdown"
        },
        {
            title: "Accesories",
            link : "#",
            className :"dropdown"
        }
    ]
    return (
        <div className='navigation'>
            <div className='main-menu'>
                <div className='allNav'>
                    <span className='Departments'>Departments</span>
                    <span className='all'><a href='#'>View all</a></span>
                </div>
                <ul className='main-nav__menu menu'>
                    {MainNav.map ((links, index) => 
                        <li className={`${links.className}`} key={index}>
                            <a href={`${links.link}`} title={`${links.title}`}>
                                {links.title}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Menu;
