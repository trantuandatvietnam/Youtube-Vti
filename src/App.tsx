import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import publicRoutes from './routes';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Element = route.component;
                        // if route has layout === null => it will hasnt layout
                        let Layout = DefaultLayout;
                        if (route?.layout) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Element />
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
