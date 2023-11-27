import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantCountainer
 *  -RestaurantCard
 *      -img
 *      -name of res, star rating, cuisines, Eta
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://www.vhv.rs/dpng/d/459-4595986_cartoon-gourmet-cute-burger-png-and-vector-image.png'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
}
const RestaurantCard = () => {
    return (
        <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
            <img className='res-card-img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamP2LsWlWFsjWPB9M8HBKoIhPH3VXNknNWg&usqp=CAU'></img>
            <h3>Dominos</h3>
            <h4>Italian, Continental</h4>
            <h4>4.3 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className='body'>
            <div className='search'> Search </div>
            <div className='res-container'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div> 
    )
}
const Footer = () => {
    return (
        <div className='footer-container'>
            <a>Copyright |</a>
            <a href=''>Place order via zomato </a>
            <h4>| Address: Manhattan, US |</h4>
            <h4>Akshita Negi |</h4>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>);