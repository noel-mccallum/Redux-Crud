import React from 'react'

export default function SingleProduct({ imgURL, title, price }) {
  return (
    <div style={{backgroundColor: 'light-gray',borderRadius: '10px', boxShadow: '0px 0px 106px -18px rgba(0,0,0,0.26)', padding: '15px'}}>
      <img style={{width: '250px', height: '250px'}} src={imgURL} alt="" />
      <div>
        <h4>{title}</h4>
        <h2>{price}</h2>
      </div>

    </div>
  )
}
