function updateInventory(inventory, shipment) {
  const hashedInventory = hashInventory(inventory)
  const res = [ ] 
  for (let item of shipment) {
    const name = item[1]
    const quantity = item[0]

    if ( name in hashedInventory) {
      hashedInventory[name] += quantity
    } else {
      hashedInventory[name] = quantity
    }
  }

  for (const [key, value] of Object.entries(hashedInventory)) {
    res.push([value, key])
  }
  return res 
}



function hashInventory(inventory) {
  const res = {} 

  for (let item of inventory) {
    const name = item[1]
    const quantity = item[0] 

    res[name] = quantity
  }

  return res 
}