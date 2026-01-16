import AnitagLi from './AnitagLi';
import './style.css';

const AnitagList = ({ tags,onShow }) => {
    return (
        <ul className="tag">
            {tags.map((tag) => (
                <AnitagLi key={tag.id} tag={tag} onShow={onShow} />
            ))}
        </ul>
    );
};

export default AnitagList;
