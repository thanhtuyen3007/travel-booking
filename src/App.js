import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '~/components/Layout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Offers from './pages/Offers/Offers';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/offers', component: Offers },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
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
