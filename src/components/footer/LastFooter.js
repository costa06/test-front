import React from 'react';

const LastFooter = () => {
    const profils = [
        {
            title: "MasterCat",
            image: "masterCarte.png"
        },
        {
            title: "Visa",
            image: "visa.png"
        },
        {
            title: "paypal",
            image: "paypal.png"
        },
        {
            title: "Carte",
            image: "carte.png"
        }
      ]
    return (
        <div className='lastfooter'>
            <div className='container'>
            <div className='content-lastfooter'>
                    {profils.map ((profil, index)  => 
                            <img src={`/images/lastfooter/${profil.image}`} alt={`${profil.title}`} key={index}/>
                        
                    )}
                </div>
            </div>
        </div>
    );
}

export default LastFooter;
