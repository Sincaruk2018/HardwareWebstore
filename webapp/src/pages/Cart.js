import React from "react";

import "../styles/Cart.css";

import placaDeVideo from "../assets/placadevideo.jpg"

function Cart() {
  return (
      <main id="cart-panel">

        <div id="cart-head">
          <span>TOTAL</span>
          <span>$800</span>
        </div>

        <div id="cart-body">

          <div className="cart-item">
            <img className="cart-image" src={placaDeVideo} alt={""} />

            <div className="item-infos">
              <span className="item-title">
                Placa de vídeo Nvidia 700 Series 2GB
              </span>
              <span className="item-price">$200</span>
              <div className="quantity-control">
                  <button className="control-btn" >&minus;</button>
                  <span className="centered">01</span>
                  <button className="control-btn" >&#43;</button>
              </div>
            </div>

            <div className="cart-infos">
              <button className="remove-btn">Remover do Carrinho</button>
              <div className="item-subtotal">
                <span>Subtotal do Produto</span>
                <span className="item-subtotal-valor">$200</span>
              </div>
            </div>

          </div>

          <div className="cart-item">
            <img className="cart-image" src={placaDeVideo} alt={""} />

            <div className="item-infos">
              <span className="item-title">
                Placa de vídeo Nvidia 700 Series 2GB
              </span>
              <span className="item-price">$200</span>
              <div className="quantity-control">
                  <button className="control-btn" >&minus;</button>
                  <span className="centered">01</span>
                  <button className="control-btn" >&#43;</button>
              </div>
            </div>

            <div className="cart-infos">
              <button className="remove-btn">Remover do Carrinho</button>
              <div className="item-subtotal">
                <span>Subtotal do Produto</span>
                <span className="item-subtotal-valor">$200</span>
              </div>
            </div>

          </div>

          <div className="cart-item">
            <img className="cart-image" src={placaDeVideo} alt={""} />

            <div className="item-infos">
              <span className="item-title">
                Placa de vídeo Nvidia 700 Series 2GB
              </span>
              <span className="item-price">$200</span>
              <div className="quantity-control">
                  <button className="control-btn" >&minus;</button>
                  <span className="centered">01</span>
                  <button className="control-btn" >&#43;</button>
              </div>
            </div>

            <div className="cart-infos">
              <button className="remove-btn">Remover do Carrinho</button>
              <div className="item-subtotal">
                <span>Subtotal do Produto</span>
                <span className="item-subtotal-valor">$200</span>
              </div>
            </div>

          </div>

        </div>

        <div id="cart-end">
          <a href="buying.html" target="_self">
            Finalizar Compra
          </a>
        </div>

      </main>
  );
}

export default Cart;
