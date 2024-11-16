function fetchAndShowData() {
    const categories = ['laptops', 'tablets']

    categories.map(async (category) => {
        const container = document.getElementById(category)

        const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=4`)
        const data = await response.json()

        data.products.map((item) => {
            container.innerHTML += `
            <div class="card">
                <img src=${item.thumbnail} alt=${item.title} />
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-detail">
                    <h4>$ ${item.price}</h4>
                    <button>Buy</button>
                </div>
            </div>
            `
        })
    })
}

fetchAndShowData()

