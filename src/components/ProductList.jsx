import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as productActions from '../redux/actions/productActions'
import { actionTypes } from '../redux/constants/actionTypes';
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const { products, loading, error } = useSelector(state => state.productState);
  const dispatch = useDispatch();
  const fetchProducts = () => {
    dispatch(productActions.productFetchRequest());
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        dispatch(productActions.setProducts(data))
      })
      .catch(err => {
        dispatch(productActions.productFetchError(err.message))
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {loading ? <h1 className='text-red-500'>Loading...</h1> : error ? <h1>{error}</h1> : (
        
        products.map(product => {

          return <Link key={product.id} to={`/products/${product.id}`}><SingleProduct imgURL={product.image} title={product.category} price={product.price}/></Link>
        })
      )}
      
    </div>
  )
}
