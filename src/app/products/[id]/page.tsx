import HomeContainer from '@/modules/home/components/HomeContainer'
import React, { Suspense } from 'react'

export async function generateStaticParams() {
  const res = await fetch(
    'https://6717b3deb910c6a6e0298d04.mockapi.io/products'
  )
  const products = await res.json()
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

const ProductsPage = async ({ params }) => {
  const { id } = await params

  return (
    <div>
      <Suspense fallback={<HomeContainer productId={id} />}>
        <HomeContainer productId={id} />
      </Suspense>
    </div>
  )
}

export default ProductsPage
