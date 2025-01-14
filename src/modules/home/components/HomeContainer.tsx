import React from 'react'
import HomeProductItem from './HomeProductItem'

const HomeContainer = async ({ product }) => {
  if (!product) return <div>error</div>
  return <HomeProductItem product={product} />
}

export default HomeContainer
