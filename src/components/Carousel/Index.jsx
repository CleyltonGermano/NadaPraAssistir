import React, { useEffect, useState } from "react";
import ReactCardCarousel from "react-card-carousel";
import "./Styles.css";

const MoviesUrl = process.env.REACT_APP_API_URL;
const MoviesApiKey = process.env.REACT_APP_API_KEY;

const Carrossel = ({ movie }) => {
  const [melhoresFilmes, setMelhoresFilmes] = useState([]);

  const getMelhoresFilmes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMelhoresFilmes(data.results);
  };

  useEffect(() => {
    const melhoresFilmesUrl = `${MoviesUrl}top_rated?${MoviesApiKey}`;
    getMelhoresFilmes(melhoresFilmesUrl);
  }, []);

  useEffect(() => {
    console.log({ melhoresFilmes });
  }, [melhoresFilmes]);

  return (
    <div className="container">
      <ReactCardCarousel spread={"wide"} autoplay={true} autoplay_speed={3000}>
        {melhoresFilmes &&
          melhoresFilmes.map((filme) => (
            <div className="cards">
              <div className="box">
                <div className="content">
                  <h3>{filme.title}</h3>
                  <br />
                  <br />
                  <p>
                    <strong>{"Data de Lançamento: "}</strong>
                    {filme.release_date}
                  </p>
                  <br />
                  <p>
                    <strong>{"Nota: "}</strong>
                    {filme.vote_average}
                  </p>
                  <a href="#">Read More</a>
                </div>
                <div className="card-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    alt={filme.title}
                  />
                </div>
              </div>
            </div>
          ))}
      </ReactCardCarousel>
    </div>
  );
};

export default Carrossel;
