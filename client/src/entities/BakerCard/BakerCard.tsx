import React from 'react';
import "./baker-card.scss";
import CustomLabel from '../../shared/CustomLabel/CustomLabel';
import baker_img from './../../images/bakers/baker-bg.jpg';

const BakerCard = (props: { styles?: string }) => {
    const { styles } = props;

    return (
        <div className={`baker_card ${styles ? styles : ''}`}>
            <img src={baker_img} alt="#" />
            <div className="describe-block">
                <div className="fio-block">
                    <h3>Інна Пономаренко</h3>
                    <p>23 відгуки</p>
                </div>
                <p className='baker_card_info'>Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...</p>
                <div className="tags">
                    <CustomLabel text='Торти' />
                    <CustomLabel text='Цукерки' />
                    <CustomLabel text='+3' />
                </div>
            </div>
        </div>
    )
}

export default BakerCard;