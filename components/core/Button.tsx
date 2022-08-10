import React from 'react';

const Button = (props): JSX.Element => {
    return (
            <button type={props.btnType} className='btn-primary'>
                {props.title} 
            </button>
    );
};

export default Button