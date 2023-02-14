import {Routes, Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/home/HomePage';
import AboutUsPage from './pages/about/AboutUsPage';
import MenuPage from './pages/menu/MenuPage';
import ArticlesPage from './pages/articles/ArticlesPage';
import ArticlePage from './pages/article/ArticlePage';
import CelebratesPage from './pages/celebrates/CelebratesPage';
import DegustationPage from './pages/degustation/DegustationPage';
import BirthdayPagePage from './pages/birthday/BirthdayPage';
import NightclubPage from './pages/nightclub/NightclubPage';
import ReviewsPage from './pages/reviews/ReviewsPage';
import GalleryPage from './pages/gallery/GalleryPage';
import ContactsPage from './pages/contacts/ContactsPage';
import PolyticsPage from './pages/polytics/PolyticsPage';
import NotfoundPage from './pages/notfoundpage/NotfoundPage';
import ScrollToTop from './utils/scrollToTop';
import {Layout} from '././components/base/Layout';



function App() {
    const helmetContext = {};
    return (
        <>
        <HelmetProvider context={helmetContext}>
            <ScrollToTop />
            <Routes>
                    <Route index element={<HomePage />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="articles/:id" element={<ArticlePage />} />
                    <Route path="/celebrates" element={<CelebratesPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/wineevening" element={<DegustationPage />} />
                    <Route path="/birthday" element={<BirthdayPagePage />} />
                    <Route path="/nightclub" element={<NightclubPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/polytics" element={<PolyticsPage />} />
                    <Route path="*" element={<NotfoundPage />} />
                </Route>
            </Routes>
        </HelmetProvider>
        </>
    );
}


export default App;
