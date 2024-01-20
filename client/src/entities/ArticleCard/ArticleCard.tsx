import React from "react";
import './article-card.scss';
import pancakes from './../../images/articles/pancakes.jpg';

const ArticleCard = () => {
    return (
        <div className="article-card">
            <img src={pancakes} alt="#" />
            <div className="describe-block">
                <h3>Кращі кондитерські Києва</h3>
                <p>Ми знаємо, де у Києві готують і подають смачні десерти та фірмові булочки, шоколадні цукерки ручної роботи, а також де можна купити натуральний шоколад. І вам розкажемо...</p>
            </div>
        </div>
    )
}

export default ArticleCard;