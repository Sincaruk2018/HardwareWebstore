import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProductCard.css';

function ProductCard({id, productImage, productName, productPrice}){



    return(
        <Link to={"/product/" + id} className="card">
          <img className="card-image" src={productImage} alt="product" />
          <span className="card-name">{productName}</span>
          <span className="card-price">{"R$ " + productPrice.toFixed(2)}</span>
        </Link>
    );
}

export default ProductCard;