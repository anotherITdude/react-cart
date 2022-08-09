import React from 'react';

const Button = (prop): JSX.Element => {
    return (
            <button className='btn-primary'>
                {prop.title} 
            </button>
    );
};

export default Button