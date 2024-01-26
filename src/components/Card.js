import React from 'react';
import '../../styles/card.css'

const Card = (props) => {
    const {listData} = props;
    const {title, author, price, img} = listData;
  return (
    <div className="product-cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card;