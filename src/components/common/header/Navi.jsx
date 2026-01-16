import { Link } from 'react-router-dom';
const Navi = () => {
    return (
        <nav className="nav">
            <ul className="gnb">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animation">Animation</Link>
                </li>
                <li>
                    <Link to="/movie">Movie</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navi;
