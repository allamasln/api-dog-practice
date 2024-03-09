getIngredients()

// declara la función getIngredients que consulte a la api una cerveza e imprima por consola un array de strings con cada uno de sus tipos de ingredientes

function getIngredients() {
	const endpoint = 'https://api.punkapi.com/v2/beers/1'
	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			const ingredients = []

			for (const ingredient in data[0].ingredients)
				ingredients.push(ingredient)

			console.log(ingredients)
		})
}
