import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    )
}
// want to load children according to path
// <Outlet/> will be REPLACED with child route element according to the path
// <Link/> avoids reloading the whole page and just refershes the changed comp. This is why recat is called single page app because components are interchanging themselves and no reloading a new page
const routeConfig = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: "/About",
                element: <About/>
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path:"/Restaurant/:resId",   //dynamic routing
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<AppLayout/>);
root.render(<RouterProvider router = {routeConfig}/>)