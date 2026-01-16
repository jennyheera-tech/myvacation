import AniconList from '../aniconList/AniconList';
import './style.css';

const Anicontent = ({ data }) => {
    return (
        <div className="secanilist">
            <h2>Animation List</h2>
            <AniconList data={data} />
        </div>
    );
};

export default Anicontent;
