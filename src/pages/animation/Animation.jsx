import { useState } from 'react';
import Anicontent from '../../components/animation/aniContent/Anicontent';
import AniForm from '../../components/animation/aniForm/AniForm';
import AnitagList from '../../components/animation/anitagList/AnitagList';
import AniVisual from '../../components/animation/aniVisual/AniVisual';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import './style.css';
import aniliData from '../../assets/api/anilistData';
import tagData from '../../assets/api/tagData';

const Animation = () => {
    const [data, setData] = useState(aniliData);
    const [tags, setTags] = useState(tagData);
    const onShow = (name) => {
        if (name === 'all') {
            setData(aniliData);
        } else {
            const newData = aniliData.filter(
                (item) => item.type.toLowerCase() === name.toLowerCase()
            );
            setData(newData);
        }

        setTags(
            tags.map((item) =>
                item.name === name ? { ...item, isClass: true } : { ...item, isClass: false }
            )
        );
    };
    const onSort = (value) => {
        if (value) {
            const newData = [...data].sort((a, b) => (a[value] > b[value] ? 1 : -1));
            setData(newData);
        }
    };
    const onSearch = (text) => {
        const newData = aniliData.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setData(newData);
    };

    return (
        <>
            <Header />
            <AniVisual />
            <div className="animation">
                <h1>Animation</h1>
                <AnitagList tags={tags} onShow={onShow} />
                <AniForm onSearch={onSearch} onSort={onSort} />
                <Anicontent data={data} />
            </div>
            <Footer />
        </>
    );
};

export default Animation;
