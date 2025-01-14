import React from 'react'
import HomeProductItem from './HomeProductItem'

type HomeContainerProps = {
  productId: string
}

const HomeContainer = async ({ productId }: HomeContainerProps) => {
  const res = await fetch(
    `https://6717b3deb910c6a6e0298d04.mockapi.io/products/${productId}`
  )
  if (!res.ok) {
    return <p>Product not found</p>
  }
  const product = await res.json()

  if (!product) {
    return <div>không có sản </div>
  }

  return <HomeProductItem product={product} />
}

export default HomeContainer
