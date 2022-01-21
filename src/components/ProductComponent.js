import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent() {

    const products = useSelector((state) => state.products.products);

    const renderList = products.map((product) => {
        return (
            <div className='four wide column' key={product.id}>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.title}/>
                            </Link>
                        </div>
                        <div className='content'>
                            <Link to={`/product/${product.id}`}>
                                <div className='header'>{product.title}</div>
                            </Link>
                            <div className='meta price'>$ {product.price}</div>
                            <div className='meta'>{product.category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent;
