import MovieconItem from './MovieconItem';
import './style.css';

const MovieconList = ({ data }) => {
    return (
         <ul className="molist">
            {data.map((item) => (
                <MovieconItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default MovieconList;