import React, {useState} from "react";
import { useParams } from "react-router-dom";

import "../styles/Product.css";

import allObjects from "../objects/complete.json";

function Product() {
  const { id } = useParams();

  const objects = allObjects.objects;
  const selectedObject = objects.filter((obj) => obj.id === id);
  const product = selectedObject[0];

  const [previewImage, setPreviewImage] = useState(product.thumbnail);

  function changePreviewImage(source){
    setPreviewImage(source);
  }

  function addItemToCart(item){
    const {id, thumbnail, name, price} = item;
    const itemObj = {
      id: id,
      thumbnail: thumbnail,
      name: name,
      price: price,
      quantity: 1
    }

    let cart = localStorage.getItem("cart");

    if (cart !== null){
      let cartJSON = JSON.parse(cart);
      let itemIsInCart = false;

      for (let index = 0; index < cartJSON.length; index++) {
        if (cartJSON[index].id === id) {
          itemIsInCart = true;
          cartJSON[index].quantity++;
          break;
        }
      }

      if(!itemIsInCart){
        cartJSON.push(itemObj);
      }

      localStorage.setItem("cart", JSON.stringify(cartJSON));
    } else {
      localStorage.setItem("cart", JSON.stringify([itemObj]));
    }

    alert("Item adicionado ao carrinho!");
  }

  return product !== undefined ? (
    <main id="preview">
      <div id="product-gallery">
        {product.photos.map((photo, index) =>(
          <img src={photo} alt={"foto " + (index + 1)} key={index} onClick={() => changePreviewImage(photo)}/>
        ))}
      </div>
      <div id="image-preview">
        <img src={previewImage} alt={"Product Preview"} />
      </div>
      <div id="product-information">
        <div className="top-info">
          <h1 className="product-name">
            {product.name}
          </h1>
          <p className="product-description">
            {product.description}
          </p>
        </div>
        <div className="bottom-info">
          <span className="product-price">{"R$ " + product.price.toFixed(2)}</span>
          <button className="button-to-cart" onClick={() => addItemToCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  ) : (
    <main className="centered"> Não foi possivel encontrar a pagina desejada</main>
  );
}

export default Product;
