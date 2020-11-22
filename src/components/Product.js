import React from 'react'


export default function Product (product) {
//console.log(product)
 
  return (

      <div className="product">
        <img src={product.image_url}></img>
  <p className="product__description">{product.title}</p>
        <p className="product__price">From: NGN 20,000.00</p>
        <button>Add to Cart</button>
      </div>
   
  );
}