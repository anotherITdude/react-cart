import React from 'react';
import Header from '../../components/header/Header';
import Button from '../../components/core/Button';

const index = () => {
    return (
        <div>
            <Header />
            This is Product cart page
            <Button title='Add To Cart' />
        </div>
    );
};

export default index;