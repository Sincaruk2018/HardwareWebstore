import React from "react";
import { Link } from "react-router-dom";

import "../styles/Store.css";

import placaDeVideo from "../assets/placadevideo.jpg";

function Store() {
  return (
    <main id="main-store">
      <div className="filters">
        <h2 className="filter-header"> Filtros</h2>
        <ul className="filter-list">
          <li>
            <input type="checkbox" name="motherboards" />
            <label for="motherboards">Motherboards</label>
          </li>
          <li>
            <input type="checkbox" name="gpus" />
            <label for="gpus">GPUs</label>
          </li>
          <li>
            <input type="checkbox" name="cpus" />
            <label for="cpus">CPUs</label>
          </li>
        </ul>
      </div>

      <div className="stand-store">
        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>

        <Link to="/product" className="card">
          <img className="card-image" src={placaDeVideo} alt="product" />
          <span className="card-name">GPU Nvidia Geforce 700 series 2GB</span>
          <span className="card-price">$200</span>
        </Link>
      </div>
    </main>
  );
}

export default Store;
