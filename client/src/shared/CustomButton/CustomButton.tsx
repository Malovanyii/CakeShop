import React from 'react';
import './custom-button.scss';

const CustomButton = (props: { text?: string, icon?: string, styles?: string }) => {
    const { text, styles, icon } = props;

    return (
        <button className={`custom-button ${styles ? styles : ''}`}>
            {icon && <img src={icon} alt='#' />} {text && text}
        </button>
    );
};

export default CustomButton;