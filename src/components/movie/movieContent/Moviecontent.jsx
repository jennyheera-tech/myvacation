import MovieconList from '../movieconList/MovieconList';
import './style.css';

const Moviecontent = ({ data }) => {
    return (
          <div className="secmolist">
            <h2>Movie List</h2>
            <MovieconList data={data} />
        </div>
    );
};

export default Moviecontent;