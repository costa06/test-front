import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const Bandeau = () => {
    return (
        <section className='bandeau'>
            <div className='container'>
                <div className='contentBandeau'>
                    <div className='text'>
                        <p>SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</p>
                    </div>
                    <div className='priceBande'>
                        <span className='starting'>STARTING AT</span>
                        <div className='price'>
                            <span className='symbole'>$</span>
                            <span className='value'>79</span>
                            <span className='extraValue'>99</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Bandeau;
