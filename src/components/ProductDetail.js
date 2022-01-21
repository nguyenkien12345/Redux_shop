import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, removedselectedProduct } from '../redux/actions/productActions';

function ProductDetail() {

    const { productId } = useParams(); // => Get id from url

    const product = useSelector((state) => state.selectedProduct) // => state null 

    const dispatch = useDispatch();

    // const fetchProductDetail = async () => {
    //     const url = `https://fakestoreapi.com/products/${productId}`;
    //     const response = await axios
    //         .get(url)
    //         .then((res) => {
    //             const data = res.data;
    //             dispatch(selectedProduct(data));
    //         })
    //         .catch((error) => {
    //             console.log('Error' + error)
    //         })
    // };

    useEffect(() => {
        if (productId !== '') {
            dispatch(fetchProduct(productId));
        }
        // Mỗi lần thay đổi trạng thái productId cần phải clean productId trước đó đi
        return () => {
            dispatch(removedselectedProduct());
        }
    }, [productId])


    return (
        <div>
            <div className='ui grid container'>
                {Object.keys(product).length === 0 ? 
                (
                    <div>...Loading</div>
                ) : 
                (
                    <div className='ui placeholder segment'>
                        <div className='ui two column stackable center aligned grid'>
                            <div className='ui vertical divider'>AND</div>
                            <div className='middle aligned row'>
                                <div className='column lp'>
                                    <img className='ui fluid image' src={product.image} />
                                </div>
                                <div className='column rp'>
                                    <h1>{product.title}</h1>
                                    <h2>
                                        <a className='ui teal tag label'>${product.price}</a>
                                    </h2>
                                    <h3 className='ui brown block header'>{product.category}</h3>
                                    <p>{product.description}</p>
                                    <div className='ui vertical animated button' tabIndex='0'>
                                        <div className='hidden content'>
                                            <i className='shop icon'></i>
                                        </div>
                                        <div className='visible content'>Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetail;