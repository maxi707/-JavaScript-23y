async function fetchShop(){
    const response = await fetch("http://localhost:3333/categories/2");
    const data = await response.json();
    console.log(data.data)
    return data
}

fetchShop()
console.log(fetchShop())
