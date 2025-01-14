import HomeContainer from '@/modules/home/components/HomeContainer'
import { Suspense } from 'react'

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
  const res = await fetch(
    `https://6717b3deb910c6a6e0298d04.mockapi.io/products/${id}`,
    { cache: 'no-store' } // Không sử dụng cache, luôn gọi API lại mỗi lần
  )

  if (!res.ok) {
    return <p>Product not found</p>
  }

  const product = await res.json()

  return (
    <div>
      <Suspense
        fallback={
          <HomeContainer
            product={{
              createdAt: '2025-01-13T15:20:02.551Z',
              name: 'Loadding',
              price: 'Niger',
              slug: 'harum-eaque-perspiciatis',
              description:
                'Non quam iusto quam. Doloribus nam beatae aliquid autem. Pariatur ad nobis ad dolor at consequuntur. Vel illo architecto dolore ab dolorem quas aliquid.Laboriosam autem perferendis quae officia neque.Veritatis dolorum in nam cupiditate nulla dicta harum labore nihil.',
              colors: [],
              sizes: [],
              rating: '301-377-6172',
              reviewCount: '2',
              reviews: [],
              imageUrl:
                'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/659.jpg',
              id: '50',
            }}
          />
        }
      >
        <HomeContainer product={product} />
      </Suspense>
    </div>
  )
}

export default ProductsPage
