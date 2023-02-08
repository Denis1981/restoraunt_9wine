import {Routes, Route} from "react-router-dom";
import Homepage from './pages/home/Homepage';
import AboutUspage from './pages/aboutus/AboutUsPage';
import Menupage from './pages/menu/MenuPage';
import Articlespage from './pages/articles/Articlespage';
import Articlepage from './pages/article/Articlepage';
import Bookingpage from './pages/bronirovanie/Bookingpage';
import Contactspage from './pages/contacts/Contactspage';
import Polyticspage from './pages/polytics/Polyticspage';
import Notfoundpage from './pages/notfoundpage/Notfoundpage';
import ScrollToTop from './utils/scrollToTop';
import {Layout} from '././components/base/Layout';



function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                    <Route index element={<Homepage />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/about" element={<AboutUspage />} />
                    <Route path="/menu" element={<Menupage />} />
                    <Route path="/articles" element={<Articlespage />} />
                    <Route path="articles/:id" element={<Articlepage />} />
                    <Route path="/booking" element={<Bookingpage />} />
                    <Route path="/contacts" element={<Contactspage />} />
                    <Route path="/polytics" element={<Polyticspage />} />
                    <Route path="*" element={<Notfoundpage />} />
                </Route>
            </Routes>

        </>
    );
}


export default App;
