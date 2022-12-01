import React from 'react'
import './Product.css'

const Product = ({id, title, image, rating, price}) => {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <small></small>
                <strong>{price}</strong>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="product" />

            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product