import React from 'react';

const FooterTop = () => {
    const reseauxSociaux = [
        {
            title: "Facebook",
            image: "facebook.png",
            link : "#"
        },
        {
            title: "Twitter",
            image: "twitter.png",
            link : "#"
        },
        {
            title: "Flux Rss",
            image: "rss.png",
            link : "#"
        },
        {
            title: "Google plus",
            image: "google+.png",
            link : "#"
        },
        {
            title: "flicker",
            image: "fliker.png",
            link : "#"
        },
        {
            title: "Dribble",
            image: "dribble.png",
            link : "#"
        },
        {
            title: "Linkedin",
            image: "linkedin.png",
            link : "#"
        }
      ]
      const Find_it_Fast = [
            {
                title: "Laptops & Computers",
                link : "#"
            },
            {
                title: "Cameras & Photography",
                link : "#"
            },
            {
                title: "Smart Phones & Tablets",
                link : "#"
            },
            {
                title: "Video Games & Consoles",
                link : "#"
            },
            {
                title: "TV & Audio",
                link : "#"
            },
            {
                title: "Gadgets",
                link : "#"
            },
            {
                title: "Car Electronic & GPS",
                link : "#"
            }
      ]
      const Find_it_Fast_2 = [
                {
                    title: "Printers & Ink",
                    link : "#"
                },
                {
                    title: "Software",
                    link : "#"
                },
                {
                    title: "Office Supplies",
                    link : "#"
                },
                {
                    title: "Computer Components",
                    link : "#"
                },
                {
                    title: "Accesories",
                    link : "#"
                }
        ]
        const In_the_Spotlight = [
            {
                title: "Electronics",
                link : "#"
            },
            {
                title: "Toys",
                link : "#"
            },
            {
                title: "Video Games",
                link : "#"
            },
            {
                title: "Home Products",
                link : "#"
            },
            {
                title: "Clothing",
                link : "#"
            },
            {
                title: "Sports & Outdoors",
                link : "#"
            },
            {
                title: "Baby Products",
                link : "#"
            }
        ]
        const Customer_Care = [
            {
                title: "My Account",
                link : "#"
            },
            {
                title: "Order Tracking",
                link : "#"
            },
            {
                title: "Wish List",
                link : "#"
            },
            {
                title: "Customer Service",
                link : "#"
            },
            {
                title: "Returns / Exchange",
                link : "#"
            },
            {
                title: "FAQs",
                link : "#"
            },
            {
                title: "Product Support",
                link : "#"
            }
        ]
    return (
        <div className='footertop'>
            <div className='container'>
                <div className='contentFooter'>
                    <div className='coordonnee'>
                        <div className='telephone'>
                            <div className='coordimg'>
                                <img src='/images/footer/tel.png'/>
                            </div>
                            <div className='coordTel'>
                                <span className='label'>
                                Got questions? Call us 24/7!
                                </span> 
                                <a href='tel:(800) 8001-8588, (0600) 874 548'>(800) 8001-8588, (0600) 874 548</a>
                            </div> 
                            
                        </div>
                        <div className='adresse'>
                            <div className='adressTitle'>
                                <p>Contact info</p>
                            </div>
                            <div className='adresseElement'>
                                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            </div>
                        </div>
                        <div className='reseauxSociaux'>
                                {reseauxSociaux.map ((rs, index) => 
                                    <a href={`${rs.link}`} target="_blank" key={index}>
                                        <img src={`/images/footer/${rs.image}`} alt={`${rs.title}`}/>
                                    </a>
                                )}
                            </div>
                    </div>
                    <div className='firstLink'>
                        <div className='titleLink'>
                            <p>Find it Fast</p>
                        </div>
                        <div className='contentLink'>
                            <ul>
                            {Find_it_Fast.map ((link, index) => 
                                <li key={index}>
                                    <a href={`${link.link}`} title={`${link.title}`} target="_blank">
                                        {link.title}
                                    </a>
                                </li>
                            )}
                            </ul>
                        </div>
                    </div>
                    <div className='firstLink'>
                        <div className='titleLink'>
                            <p></p>
                        </div>
                        <div className='contentLink'>
                            <ul>
                                {Find_it_Fast_2.map ((link, index) => 
                                    <li key={index}>
                                        <a href={`${link.link}`} title={`${link.title}`} target="_blank">
                                            {link.title}
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='secondLink'>
                        <div className='titleLink'>
                            <p>In the Spotlight</p>
                        </div>
                        <div className='contentLink'>
                            <ul>
                                {In_the_Spotlight.map ((link, index) => 
                                    <li key={index}>
                                    <a href={`${link.link}`} title={`${link.title}`} target="_blank">
                                        {link.title}
                                    </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='thridLink'>
                    <div className='titleLink'>
                            <p>Customer Care</p>
                        </div>
                        <div className='contentLink'>
                            <ul>
                            {Customer_Care.map ((link, index) => 
                                <li key={index}>
                                    <a href={`${link.link}`} title={`${link.title}`} target="_blank">
                                        {link.title}
                                    </a>
                                </li>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;
