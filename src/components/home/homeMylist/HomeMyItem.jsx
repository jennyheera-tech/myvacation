const HomeMyItem = ({ item,onDel }) => {
    const { id, title, year, score, img, date } = item;
    return (
        <li>
            <p>
                <img src={img} alt={title} />
            </p>
            <div>
                <strong>{title}</strong>
                <em>평점:{score} </em>
            </div>
            <button onClick={()=>onDel(id) }>삭제</button>
        </li>
    );
};

export default HomeMyItem;
