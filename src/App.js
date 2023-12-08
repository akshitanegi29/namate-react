import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body/>
            <Footer/>
        </div>
    )
}

const routeConfig = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/About",
        element: <About/>
    },
    {
        path: "/Contact",
        element: <Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<AppLayout/>);
root.render(<RouterProvider router = {routeConfig}/>)