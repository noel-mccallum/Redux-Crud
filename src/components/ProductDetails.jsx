import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import * as productActions from '../redux/actions/productActions';

export default function ProductList() {
  const { singleProduct, loading, error } = useSelector(state => state.productState);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const fetchSingleProduct = () => {
    dispatch(productActions.productFetchRequest());
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        dispatch(productActions.setSingleProduct(data))
      })
      .catch(err => {
        dispatch(productActions.productFetchError(err.message))
      })
  }

  const { image, price, title, description } = singleProduct;

  useEffect(() => {
    fetchSingleProduct()
  }, [productId])

  return (
    <>
        {loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : (
          <div>
            <Link to='/products'><h1>All Products</h1></Link>
            <div style={{ display: 'flex', gap: '50px', marginTop: '50px'}}>
              <div>
                <img style={{ width: '300px'}} src={`${image}`} alt='product image'/>
              </div>
              <div style={{ textAlign: 'left'}}>
                <h1>${price}</h1>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
         
        )}
        
    </>

  )
}
