import React from 'react';

const Button = (prop): JSX.Element => {
    return (
        <div>
            <button className='btn-primary'>
                {prop.title}
            </button>
        </div>
    );
};

export default Button