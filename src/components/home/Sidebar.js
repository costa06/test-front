import React from 'react';

const Sidebar = () => {
    const Siderbar = [
        {
            title: "CATCH BIG DEALS ON THE CONSOLES",
            link : "#"
        },
        {
            title: "SHOP THE HOTTEST PRODUCTS",
            link : "#"
        },
        {
            title: "LAPTOPS, NOTEBOOKS AND MORE",
            link : "#"
        }
    ]
    return (
        <div className='sidebarRight'>
            {Siderbar.map ((links, index) => 
               <div className='itemRight'  key={index}>
                    <div className='title'>
                        <h1>{links.title}</h1>
                        </div>
                        <div className='btnBottom'>
                            <a href={`${links.link}`} title={`${links.title}`}>
                                Shop now
                                <img  src='/images/sidebar/btn-right.png' alt=""/>
                            </a>
                        </div>
                </div>   
            )}     
        </div>
    );
}

export default Sidebar;
