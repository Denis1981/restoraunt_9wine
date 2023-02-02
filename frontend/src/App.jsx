import {Routes, Route} from "react-router-dom";
import Homepage from './pages/home/Homepage';
import AboutUspage from './pages/aboutus/AboutUsPage';
import Contactspage from './pages/contacts/Contactspage';
import Notfoundpage from './pages/notfoundpage/Notfoundpage';
import ScrollToTop from './utils/scrollToTop';
import {Layout} from '././components/base/Layout';



function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/about" element={<AboutUspage />} />
                    <Route path="/contacts" element={<Contactspage />} />
                    <Route path="*" element={<Notfoundpage />} />
                </Route>
            </Routes>

        </>
    );
}


export default App;
