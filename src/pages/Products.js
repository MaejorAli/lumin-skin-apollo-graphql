import React, { Component } from "react";
import Product from  "../components/Product"

import { useQuery, gql } from '@apollo/client';

const products = gql`

query getProducts {
  products{
    id
    title
    image_url
    
    }
}

`


export default function Products () {
  
  const { loading, error, data } = useQuery(products);
  console.log(loading,error,data);

  return (
    <div className="product_page">
      <div className="all_products_section">
      <div className="all_products">
          <p>All Products</p>
          <p className="all_prod_paragraph">A 360° look at Lumin</p>
        </div>
        <div className="filter_box">Filter by
          <select placeholder="Filter by"></select>
        </div>
      </div>
      {data && <div className="products_section">
       {(()=> data.products.map((product)=> (<Product key={product.id} {...product}></Product>)))()}
      </div>}
        
    </div>
  );
}