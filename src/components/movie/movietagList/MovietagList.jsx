import MovietagLi from './MovietagLi';
import './style.css';

const MovietagList = ({ tags, onShow }) => {
    return (
        <ul className="tag">
            {tags.map((tag) => (
                <MovietagLi key={tag.id} tag={tag} onShow={onShow} />
            ))}
        </ul>
    );
};

export default MovietagList;
