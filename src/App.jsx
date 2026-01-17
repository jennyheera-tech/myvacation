import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Animation from './pages/animation/Animation';
import Movie from './pages/movie/Movie';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/animation" element={<Animation />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
