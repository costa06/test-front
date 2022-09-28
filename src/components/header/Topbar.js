import React from 'react';

const Topbar = () => {
    return (
        <div className='headerTopbar'>
            <div className='mainNav'>
                <img  src='/images/header/nav.png' alt=""/>
            </div>
            <div className='search'>
                <form>
                    <div className='contentForm'>
                        <input type='text' placeholder="Search for products"></input>
                        <select name="Categories" id="Categories">
                            <option value="">All Categories</option>
                        </select>
                    </div>
                    <button className='serchBtn' type="submit"><img  src='/images/header/search.png' alt=""/></button>
                </form>
            </div>
            <div className='itemTop'>
                <div className='item'><a href='#'>SuperDeals</a></div>
                <div className='item'><a href='#'>Top 10 Printers</a> </div>
                <div className='item'><a href='#'>Trending</a></div>
            </div>
            <div className='shopTop'>
                <div className='compare'>
                    <img  src='/images/header/compare.png' alt=""/>
                </div>
                <div className='selection'>
                    <img  src='/images/header/selection.png' alt=""/>
                </div>
                <div className='panier'>
                    <div className='contentpanier'>
                        <img  src='/images/header/panier.png' alt=""/>
                        <span className='count'>0</span>
                    </div>
                    <div className='price'>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
