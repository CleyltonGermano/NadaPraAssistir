import Navbar from "../../components/Navbar/Index";
import Footer from "../../components/Footer/Index";
import React from "react";
import "./Styles.css";
import MovieCards from "../../components/Cards/Index";
import Carousel from "../../components/Carousel/Index";

function Home() {


  const items = [
    {
      image: "img/childbirth.jpg",
      imageAlt: "Childbirth education classes",
      svg: "svg/childbirth_education_classes_icon.webp",
      svgAlt: "Childbirth education classes",
      text: "CHILDBIRTH EDUCATION CLASSES",
      textLink: "https://www.pampers.com/en-us/pregnancy/birthing-classes"
    }];

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
            <Carousel
              list={<MovieCards />}
            />
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
