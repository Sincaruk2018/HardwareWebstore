import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Product.css";

import placaDeVideo from "../assets/placadevideo.jpg";
import placaDeVideo2 from "../assets/placadevideo2.png";

function Product() {
    
    return(
        <main id="preview">
        <div id="product-gallery">
            <img src={placaDeVideo} alt={""} />
            <img src={placaDeVideo2} alt={""} />
        </div>
        <div id="image-preview">
            <img src={placaDeVideo} alt={""} />
        </div>
        <div id="product-information">
            <div className="top-info">
                <h1 className="product-name">Placa de Vídeo Geforce 700 Series 2GB</h1>
                <p className="product-description">
                    Interface: PCI-E 2.0 x 8 | 
                    GPU: GeForce® GT 710 |
                    Core Clock: 954 MHz |
                    Processo tecnológico: 28 nm |
                    Clock efetivo: 5010 MHz |
                    Tamanho: 2GB |
                    Interface: 64 bit |
                    Tipo: DDR5 |
                    API 3D: DirectX 12, OpenGL 4.5 |
                    Portas: 1 x HDMI, 1 x Dual-link DVI-I |
                </p>
            </div>
            <div className="bottom-info">
                <span className="product-price">$200</span>
                <Link to="/cart" className="button-to-cart"> Adicionar ao carrinho </Link>
            </div>
        </div>
    </main>
    );
}

export default Product;