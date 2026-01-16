const AnitagLi = ({ tag, onShow }) => {
    const { id, name, isClass, text } = tag;
    return (
        <li className={isClass ? 'on' : ''} onClick={() => onShow(name)}>
            {text}
        </li>
    );
};

export default AnitagLi;
