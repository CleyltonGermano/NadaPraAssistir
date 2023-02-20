import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { MovieCard } from "../../components/Cards/index";
import Carousel from "../../components/Carousel/index";
import { SimplyCarousel } from "../../components/Carousel2";

const MoviesUrl = process.env.REACT_APP_API_URL;
const MoviesApiKey = process.env.REACT_APP_API_KEY;

function Home() {
  const [melhoresFilmes, setMelhoresFilmes] = useState([]);
  const [novosLancamentos, setNovosLancamentos] = useState([]);

  const getMelhoresFilmes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMelhoresFilmes(data.results);
  };

  const getNovosLancamentos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setNovosLancamentos(data.results);
  };

  useEffect(() => {
    const melhoresFilmesUrl = `${MoviesUrl}top_rated?${MoviesApiKey}&language=pt-BR`;
    getMelhoresFilmes(melhoresFilmesUrl);

    const novosLancamentosUrl = `${MoviesUrl}now_playing?${MoviesApiKey}&language=pt-BR`;
    getNovosLancamentos(novosLancamentosUrl);
    console.log("busca: ", novosLancamentosUrl);
  }, []);

  useEffect(() => {
    console.log({ novosLancamentos });
  }, [novosLancamentos]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header"></div>
        <div className="body">
          <div className="body__content">
            <div className="new_movies">
              <div className="carousel_top20">
                <h2>Lançamentos</h2>
                <div className="carousel">
                  {novosLancamentos &&
                    novosLancamentos.map((movie) => (
                      <MovieCard
                        title={movie?.title}
                        release_date={movie?.release_date}
                        image_url={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                      />
                    ))}
                </div>
              </div>
              <h2>Novos lançamentos</h2>
            </div>
            <div className="carousel_top20">
              <h2>
                Confira os 20 filmes melhores avaliados por nossos usuarios
              </h2>
              <div className="carousel">
                {melhoresFilmes &&
                  melhoresFilmes.map((movie) => (
                    <MovieCard
                      title={movie?.title}
                      release_date={movie?.release_date}
                      image_url={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
