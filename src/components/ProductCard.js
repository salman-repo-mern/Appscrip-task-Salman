import React, { useState } from "react";
import "../App.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="product-card">
            <div className="product-img">
                <img src={product.image} alt={product.title} />
            </div>
            <h4 className="product-title">{product.title}</h4>
            <div className="price-like-row">
                <p className="product-price">
                    <span style={{ "textDecoration": 'underline' }}>Sign in</span> or Create an account to see pricing
                </p>
                <span className="wishlist" onClick={() => setLiked(!liked)}>
                    {liked ? <AiFillHeart size={20} style={{ 'color': 'red' }} /> : <AiOutlineHeart size={20} />}
                </span>
            </div>

        </div>
    );
};

export default ProductCard;
