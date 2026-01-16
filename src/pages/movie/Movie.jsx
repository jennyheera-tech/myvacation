import { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Moviecontent from "../../components/movie/movieContent/Moviecontent";
import MovieForm from "../../components/movie/movieForm/MovieForm";
import MovietagList from "../../components/movie/movietagList/MovietagList";
import MovieVisual from "../../components/movie/movieVisual/MovieVisual";
import './style.css';
import movieData from "../../assets/api/movieData";
import tagData from "../../assets/api/tagData";

const Movie = () => {
     const [data, setData] = useState(movieData);
    const [tags, setTags] = useState(tagData);
    const onShow = (name) => {
        if (name === 'all') {
            setData(movieData);
        } else {
            const newData = movieData.filter(
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
        const newData = movieData.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setData(newData);
    };
    return (
        <>
         <Header/>
         <MovieVisual/>
          <div className="movie">
                <h1>Movie</h1>
                <MovietagList tags={tags} onShow={onShow} />
                <MovieForm onSearch={onSearch} onSort={onSort} />
                <Moviecontent data={data} />
            </div>
         <Footer/>   
        </>
    );
};

export default Movie;