import {Outlet} from "react-router-dom";
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            {/*<Navbar />*/}
            <Outlet />
            <Footer />
        </>
    );
}

export {Layout}