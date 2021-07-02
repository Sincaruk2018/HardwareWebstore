import React from "react";
import {Link} from 'react-router-dom';

import "../styles/Home.css";

import bannerPlacaDeVideo from "../assets/banner-placadevideo.jpg";
import bannerPlacaMae from "../assets/banner-placamae.jpg";
import bannerCPU from "../assets/banner-cpu.jpeg";

function Home() {
  return (
    <main className="stand">
      <div className="category">
        <h2 className="category-name"> Placa de Vídeo </h2>
        <div className="banner">
          <Link to="/store" target="_self">
            <img src={bannerPlacaDeVideo} alt="Placas de Vídeo" />
          </Link>
        </div>
      </div>

      <div className="category">
        <h2 className="category-name"> Placa Mãe </h2>
        <div className="banner">
          <Link to="/store" target="_self">
            <img src={bannerPlacaMae} alt="Placas de Vídeo" />
          </Link>
        </div>
      </div>

      <div className="category">
        <h2 className="category-name"> Processador </h2>
        <div className="banner">
          <Link to="/store" target="_self">
            <img src={bannerCPU} alt="Placas de Vídeo" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
