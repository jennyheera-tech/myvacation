import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Animation from './pages/animation/Animation';
import Movie from './pages/movie/Movie';
import Home from './pages/home';
const App = () => {
    return (
        <BrowserRouter>
            <div id="wrap">
                <Routes>
                    {/* 화면에 보이는영역 */}
                    <Route path="/" element={<Home />} />
                    <Route path="/animation" element={<Animation />} />
                    <Route path="/movie" element={<Movie />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
