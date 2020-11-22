import React from 'react';
import Layout from '../layout';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <Layout>
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span> 
        </div> 
    </div>
    </Layout>
);

export default CollectionItem;