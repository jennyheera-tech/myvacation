import { useRef, useState } from 'react';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import HomeInput from '../../components/home/homeInput/HomeInput';
import HomeMylist from '../../components/home/homeMylist/HomeMylist';
import HomeVisual from '../../components/home/homeVisual/HomeVisual';
import './style.css';
import aniData from '../../assets/api/aniData';
const Home = () => {
    const [data, setData] = useState(aniData);
    const [isShow, setIsshow] = useState(true);
    const no = useRef(data.length + 1);

    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const onAdd = (obj) => {
        const findItem = aniData.find(
            (item) => item.title.trim().toLowerCase() === obj.title.trim().toLowerCase()
        );

        setData([
            ...data,
            {
                id: no.current++,
                title: obj.title,
                score: obj.score,
                img: findItem ? findItem.img : '', // ⭐ 삼항연산자
            },
        ]);
    };

    const onShow = (e) => {
        const { checked } = e.target;
        setIsshow(checked);
    };
    const onBnt1 = () => {
        setData([]);
    };
    const onBnt2 = () => {
        setData(aniData);
    };
    return (
        <>
            {/* 🔴 테스트용: 이게 보이면 라우팅은 100% 정상 */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 9999,
                    background: 'red',
                    color: 'white',
                    fontSize: '24px',
                    padding: '10px',
                }}
            >
                HOME IS RENDERED
            </div>
            <Header />
            <HomeVisual />
            <article className="mylist">
                <h2>My List: {data.length}개 </h2>
                <p className="chk">
                    <input type="checkbox" checked={isShow} onChange={onShow} />
                    {isShow ? '닫기' : '추가'}
                </p>
                <HomeMylist data={data} onDel={onDel} />
                <p className="btn">
                    <button onClick={onBnt1}>모두삭제</button>
                    <button onClick={onBnt2}>초기화</button>
                </p>
                {isShow && <HomeInput onAdd={onAdd} />}
            </article>

            <Footer />
        </>
    );
};

export default Home;
