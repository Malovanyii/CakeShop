import React from "react";
import './select-another-article-card.scss';
import ChangeArticleButton from "../../shared/ChangeArticleButton/ChangeArticleButton";

import pancakes from './../../images/articles/pancakes_big.jpg';

const SelectAnotherArticleCard = (props: {styles?: string}) => {
    const {styles} = props;

    return (
        <div className="select-article-card">
            <div className={`container ${styles ? styles : ''}`}>
                <ChangeArticleButton styles={styles ? styles : undefined}/>
            </div> 
            <img src={pancakes} alt="#"/>
            <div className={`container`}>
                <p>Кращі кондитерські Києва</p>
            </div>
        </div>
    )
}

export default SelectAnotherArticleCard;