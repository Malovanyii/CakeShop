import React from "react";
import './change-article-button.scss';

import goBack from './../../images/icons/go_back.svg';


const ChangeArticleButton = (props: {styles?: string}) => {
    const {styles} = props;

    return (
        <button className={`change-article-button ${styles ? styles : ''}`}>
            <div className="button-image"><img src={goBack} alt="#" /></div>
            {styles ? 
                <h3>Наступна стаття</h3>
                :
                <h3>Попередня стаття</h3>
            }  
        </button>
    )
}

export default ChangeArticleButton;