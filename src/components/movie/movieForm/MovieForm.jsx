import { useState } from "react";

const MovieForm = ({ onSearch, onSort }) => {
      const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
    };

    const onSelect = (e) => {
        e.preventDefault();
        const { value } = e.target;
        onSort(value);
    };
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    return (
        <form className="form" onSubmit={onSubmit}>
            <p>
                <input
                    type="text"
                    name="text"
                    id=""
                    placeholder="검색어를 입력하세요"
                    value={text}
                    onChange={changeInput}
                />
                <button type="submit">검색</button>
            </p>
            <select onChange={onSelect}>
                <option value="">---------------- </option>
                <option value="title">제목</option>
                <option value="score">평점</option>
                <option value="year">발행년도 </option>
                <option value="date">업데이트 </option>
            </select>
        </form>
    );
};

export default MovieForm;