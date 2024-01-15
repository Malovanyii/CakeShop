import React from 'react';
import "./custom-label.scss";

const CustomLabel = (props: {text: string, styles?: string}) => {
    const {text, styles} = props;

    return (
        <label className={`custom-label ${styles ? styles : ''}`}>{text}</label>
    )
}

export default CustomLabel;