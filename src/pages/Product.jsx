import React from 'react'
import ProductSchema from '../components/ProductSchema'


const product = {
  name: 'დღის ზურგჩანთა 20L',
  image: 'https://example.com/daypack.webp',
  price: '89.00',
  currency: 'GEL',
  inStock: true,
}

function Product() {
  return (<>
    <ProductSchema product={product}/>
    <div>
        <p>{product.name}</p>
  <p>{product.name}</p>
      <img src={product.image} alt={product.name} />
      <span>{product.price}</span>
      <span>{product.currency}</span>
      <span>{product.inStock ? 'In stock' : 'Out of stock'}</span>
    </div>
    </>
  )
}

export default Product