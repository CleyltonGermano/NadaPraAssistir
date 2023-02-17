import Navbar from "../../components/Navbar/Index";
import React, { useEffect, useState } from "react";
import "./styles.css";

const MoviesUrl = process.env.REACT_APP_API_URL;
const MoviesApiKey = process.env.REACT_APP_API_KEY;

function Home() {
  const [melhoresFilmes, setMelhoresFilmes] = useState([]);
  const [search, setSearch] = useState("");

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
      <Navbar />
      <h2>Melhores Filmes</h2>
      <div className="container-cards">
        <div>
          {melhoresFilmes &&
            melhoresFilmes.map((filme) => (
              <>
                <div className="cards" key={filme.id}>
                  <div className="card-title">
                  <h3>{filme.title}</h3>
                  </div>
                  <img
                    className="card-img"
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    alt={filme.title}
                  />
                  <div className="card-body">
                    <p>
                      <strong>{"Título Original: "}</strong>
                      {filme.original_title}
                    </p>
                    <br />
                    <p>
                      <strong>{"Idioma original: "}</strong>
                      {filme.original_language}
                    </p>
                    <br />
                    <p>
                      <strong>{"Sinopse: "}</strong>
                      {filme.overview}
                    </p>
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
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
