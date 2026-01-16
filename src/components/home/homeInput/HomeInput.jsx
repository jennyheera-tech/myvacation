import { useState } from 'react';
import './style.css';
const HomeInput = ({ onAdd }) => {
    const [obj, setObj] = useState({
        title: '',
        score: '',
    });
    const { title, score } = obj;
    const changeInput = (e) => {
        const { name, value } = e.target;
        setObj({ ...obj, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(obj);
    };

    return (
        <form className="formadd" onSubmit={onSubmit}>
            <p>
                <label htmlFor="">영화제목 </label>
                <input type="text" name="title" value={title} onChange={changeInput} />
                {/* 6-3)value, name 모두 연결 */}
                {/* 7-2)ref추가후 공백 연결  */}
            </p>
            <p>
                <label htmlFor="">평점 </label>
                <input type="text" name="score" value={score} onChange={changeInput} />
            </p>
           
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default HomeInput;
