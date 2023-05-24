import { inventoryByCategory } from "./inventoryByCategory"
import inventory from "./inventory"

function inventoryForCategory(category) {
  const byCategory = inventoryByCategory(inventory)
  return byCategory[category].items
}

export default inventoryForCategory
