// import package
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
// import components
import ProductComponent from './ProductComponent';
// import actions
import {setProducts, fetchProducts} from '../redux/actions/productActions'

function ProductsList() {

    const dispatch = useDispatch(); 

    // const fetchProducts = async () => {
    //     const url = 'https://fakestoreapi.com/products';
    //     const response = await axios
    //     .get(url)
    //     .then((res) => {
    //         const data = res.data;
    //         // Lưu data cho state products trong productReducer
    //         dispatch(setProducts(data));
    //     })
    //     .catch((error) => {
    //         console.log('Error' + error)
    //     })
    // };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductsList;
