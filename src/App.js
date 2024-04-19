import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '~/components/Layout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Tours from './pages/Tours/Tours';
import DescTour from './components/DescTour/DescTour';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/tours', component: Tours },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
    { path: '/:title', component: DescTour },
];
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map(({ path, component, Layout = DefaultLayout }, index) => {
                        const Page = component;
                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
