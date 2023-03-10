import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating-stars-component'
export default function ProductCards({product}) {
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth < 600?15:25,
        value:product.ratings,
        isHalf:true
    }
    return (
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <Rating {...options} />
                <span className="productCardSpan">
                    ({product.numOfReviews} <span>Reviews</span>)
                </span>
            </div>
            <span>{`₹${product.price}`}</span>
        </Link>
    )
}
