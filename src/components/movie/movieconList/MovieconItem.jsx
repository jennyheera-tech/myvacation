
const MovieconItem = ({ item }) => {
        const { id, title, type, year, score, img, date,desc } = item;

    return (
        <li>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>평점 : {score} </p>
            <p>{year} </p>
            <p>{desc} </p>
            <p>업데이트 : {date} </p>
        </li>
    );
};

export default MovieconItem;