import { query } from '@/utils/httpGraphql'
import { gql } from 'graphql-request'

export const MenuQuery = gql`
  query MenuItems {
    menuItems {
      nodes {
        id
        path
        label
        parentId
        order
      }
    }
  }
`

export const shareMenuApi = async () => {
  try {
    return await query<any>(MenuQuery)
  } catch (error) {
    throw new Error('Api failure: ' + error.message)
  }
}
