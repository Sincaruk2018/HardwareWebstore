import React from "react";
import ProductCard from "../components/ProductCard";

import "../styles/Store.css";

import mockObjects from "../objects/simplified.json";

function Store() {
  const produtos = mockObjects.objects;

  return (
    <main id="main-store">
      <div className="filters">
        <h2 className="filter-header"> Filtros</h2>
        <ul className="filter-list">
          <li>
            <input type="checkbox" name="motherboards" />
            <label htmlFor="motherboards">Motherboards</label>
          </li>
          <li>
            <input type="checkbox" name="gpus" />
            <label htmlFor="gpus">GPUs</label>
          </li>
          <li>
            <input type="checkbox" name="cpus" />
            <label htmlFor="cpus">CPUs</label>
          </li>
        </ul>
      </div>

      <div className="stand-store">
        {produtos.map((produto) => 
          <ProductCard
            key={produto.id}
            id={produto.id}
            productImage={produto.thumbnail}
            productName={produto.name}
            productPrice={produto.price}
          />
        )}
        
      </div>
    </main>
  );
}

export default Store;
