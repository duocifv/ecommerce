import { shareMenuApi } from './share.api'

export const shareMenuService = async () => {
  const result = await shareMenuApi()
  if (!result) return []
  const menuItems = result?.menuItems?.nodes
  if (!menuItems) return []
  const sortedItems = [...menuItems].sort((a, b) => a.order - b.order)

  const menu = sortedItems.reduce((acc, item) => {
    if (!item.parentId) {
      acc[item.label] = acc[item.label] || { ...item, children: [] }
    } else {
      const parent = sortedItems.find(
        (parentItem) => parentItem.id === item.parentId
      )
      if (parent?.label) {
        acc[parent.label].children = acc[parent.label].children
          ? [...acc[parent.label].children, item]
          : [item]
      }
    }
    return acc
  }, {})
  return Object.values(menu)
}
