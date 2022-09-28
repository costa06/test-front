import React from 'react';

const HomeBottom = () => {
    const HomeBottom = [
        {
            title: "Smartdevices",
            link : "#"
        },
        {
            title: "Games & Consoles",
            link : "#"
        },
        {
            title: "Headphones",
            link : "#"
        },
        {
            title: "Cameras",
            link : "#"
        },
        {
            title: "Desktop PCs",
            link : "#"
        }
    ]
    return (
        <div className='homeBottom'>
            {HomeBottom.map ((links, index) => 
               <div className='itemBottom' key={index}>
                        <div className='linkBottom'>
                            <a href={`${links.link}`} title={`${links.title}`}>
                                {links.title}
                            </a>
                        </div>
                </div>   
            )}     
        </div>
    );
}

export default HomeBottom;
