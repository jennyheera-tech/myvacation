import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Animation from './pages/animation/Animation';
import Movie from './pages/movie/Movie';

const App = () => {
    return (
        <HashRouter>
            <div id="wrap">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/animation" element={<Animation />} />
                    <Route path="/movie" element={<Movie />} />

                    {/* ⭐️ 이 줄 추가 */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default App;
