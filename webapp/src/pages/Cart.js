import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import "../styles/Cart.css";

import CartItem from "../components/CartItem";

function Cart() {

  const [items, setItems] = useState([]);

  // const [total, setTotal] = useState(0);
  useEffect(() => {
    const storageContent = localStorage.getItem("cart");
    if (storageContent === null) {return;}
    const cartItens = JSON.parse(storageContent);

    setItems(cartItens);
  }, []);

  return (
    <main id="cart-panel">
      <div id="cart-head">
        <span>TOTAL</span>
        <span>$800</span>
      </div>

      <div id="cart-body">
        {items.map((current) =>
          <CartItem image={current.thumbnail} title={current.name} price={current.price} />
        )}
      </div>

      <div id="cart-end" className="centered">
        <Link to="/payment">Finalizar Compra</Link>
      </div>
    </main>
  );
}

export default Cart;
