import React from 'react';
import { connect } from 'react-redux';

import Layout from '../layout';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
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
                <CustomButton onClick={() => addItem(item)} inverted> Add to Cart </CustomButton>
            </div>
        </Layout>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);