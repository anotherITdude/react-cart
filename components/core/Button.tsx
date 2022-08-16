import React from 'react';

const Button = (props): JSX.Element => {
    
    return (
            <button disabled={props.stock > 0 ? false: true} 
            
            type={props.btnType} 
            className={props.type}>
                {
                   props.title
                }
                
            </button>
    );
};

export default Button