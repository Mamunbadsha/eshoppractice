import React from 'react'
import ProductLayout from './ProductLayout'
import Container from './Container'

const FeatureProduct = () => {
  return (
   <Container>
     <div className='flex'>
        <ProductLayout/>
        <ProductLayout/>
        <ProductLayout/>
        <ProductLayout/>
        <ProductLayout/>
    </div>
   </Container>
  )
}

export default FeatureProduct