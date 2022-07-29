export async function getitems() {
  const request = await fetch('http://localhost:3000/api/items');
  const items=request.json();
  return items;
}

export async function getLatestItems() {
    const items=await getitems();
    return items.slice(0,3)

}