import React, { Component } from 'react'



class ProductInfo extends Component {
  render() {
    return(
      <div className='product-div'>
       <img className='product-img' src='https://react.semantic-ui.com/images/wireframe/image.png' />
       <a href='#'><h4>Buy Now</h4></a>
       <em>$49.99</em>
      </div>
    )
  }
}


export default ProductInfo
