import React from 'react';
import "./item-card.scss";
import main_img from './../../images/cakes/main_image.jpg';

const ItemCard = () => {


    return (
        <div className='card'>
            <img className='cake-photo' src={main_img} alt="#" />

            <div className='info-block'>
                <h3 className="price">520грн</h3>
                <p className='description'>Торт “Літнє бажання” з шоколадом та макарунами</p>
                <p className='add-info'>4 варіанти начинок</p>
            </div>

            {/* <div className="baker">
                <img className='baker_photo' src={require('./../../images/bakers/inna.jpg')} alt="#" />
                <div className="baker_info">
                    <h5 className='name'>Інна Пономаренко</h5>
                    <p className="comments">3 відгуки</p>
                </div>
            </div> */}
        </div>
    )
}

export default ItemCard;