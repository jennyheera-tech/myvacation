import AniconItem from './AniconItem';
import './style.css';

const AniconList = ({ data }) => {
    return (
        <ul className="anilist">
            {data.map((item) => (
                <AniconItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default AniconList;
