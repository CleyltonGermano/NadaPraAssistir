import Navbar from "../../components/Navbar/Index";
import React from "react";
import "./styles.css";
import MovieCard from "../../components/Carrossel/Index";

function Home() {
  return (
    <>
      <Navbar />
      <div >
        <h2>Melhores Filmes</h2>
      </div>
      <MovieCard />
    </>
  );
}
export default Home;
