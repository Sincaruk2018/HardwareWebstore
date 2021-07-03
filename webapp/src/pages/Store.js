import React from "react";
import ProductCard from "../components/ProductCard";

import "../styles/Store.css";

import placaDeVideo from "../assets/placadevideo.jpg";

function Store() {
  const produtos = [
    {
      id: 1,
      name: "GPU Nvidia Geforce 700 series 2GB",
      price: "700",
    },

    {
      id: 2,
      name: "GPU Quase Geforce 1005 1GB",
      price: "300",
    },
  ];

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
        {produtos.map((produto) => 
          <ProductCard
            id={produto.id}
            productImage={placaDeVideo}
            productName={produto.name}
            productPrice={produto.price}
          />
        )}
        
      </div>
    </main>
  );
}

export default Store;
