import { HashRouter, Routes, Route } from 'react-router-dom';

import Animation from './pages/animation/Animation';
import Movie from './pages/movie/Movie';
import Home from './pages/home';

const App = () => {
    return (
        <HashRouter>
            <div id="wrap">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/animation" element={<Animation />} />
                    <Route path="/movie" element={<Movie />} />

                    {/* ✅ v7 필수 안전장치 */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default App;
