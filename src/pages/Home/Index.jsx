import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { MovieCard } from "../../components/Cards/index";
import Carousel from "../../components/Carousel/index";

const MoviesUrl = process.env.REACT_APP_API_URL;
const MoviesApiKey = process.env.REACT_APP_API_KEY;

function Home() {
  const [melhoresFilmes, setMelhoresFilmes] = useState([]);

  const getMelhoresFilmes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMelhoresFilmes(data.results);
  };

  useEffect(() => {
    const melhoresFilmesUrl = `${MoviesUrl}top_rated?${MoviesApiKey}&language=pt-BR`;
    getMelhoresFilmes(melhoresFilmesUrl);
  }, []);

  useEffect(() => {
    console.log({ melhoresFilmes });
  }, [melhoresFilmes]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <h2>Melhores Filmes</h2>
        </div>
        <div className="body">
          <p>Confira os melhores filmes do momento</p>
          <div className="carrosel">
            <Carousel>
            {melhoresFilmes &&
              melhoresFilmes.map((movie) => (
                <MovieCard
                  title={movie?.title}
                  description={movie?.overview}
                  image_url={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
