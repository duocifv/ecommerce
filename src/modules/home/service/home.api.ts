import { client } from '@/utils/apiClient'

export const homeApi = async () => {
  try {
    return await client.get('list')
  } catch (error) {
    throw new Error('not api', error.message)
  }
}

export const flashSaleApi = async () => {
  try {
    return await client.get('products/flash-sale')
  } catch (error) {
    throw new Error('not products/flash-sale', error.message)
  }
}
