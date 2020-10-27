import React from 'react';

const Button = (props) => {
    return <button className={`btn btn-${props.buttonType}`}>
        {props.label}
    </button>
};

export default Button;
export const ButtonV2 = (props) => {
    return (
        <button className={`btn btn-${props.buttonType}`}>
            {props.children}
        </button>
    );
    
};