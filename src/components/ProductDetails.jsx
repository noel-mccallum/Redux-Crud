import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductDetails({ productId }) {
  const { singleProduct, loading, error } = useSelector(state => state.productState)
  console.log(singleProduct, loading, error)
  const dispatch = useDispatch();

  const fetchSingleProduct = () => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(data => dispatch())
  }
  return (
    <div>ProductDetails</div>
  )
}
