import {Routes, Route} from "react-router-dom";
import Homepage from './pages/home/Homepage';
import AboutUspage from './pages/aboutus/AboutUsPage';
import Menupage from './pages/menu/MenuPage';
import Articlespage from './pages/articles/Articlespage';
import Articlepage from './pages/article/Articlepage';
import Contactspage from './pages/contacts/Contactspage';
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
                    <Route path="/contacts" element={<Contactspage />} />
                    <Route path="*" element={<Notfoundpage />} />
                </Route>
            </Routes>

        </>
    );
}


export default App;
