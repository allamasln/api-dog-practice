const randomBeerBtn = document.querySelector('#btn-random-beer')

const container = document.querySelector('main')

const baseURL = 'https://api.punkapi.com/v2/beers'

randomBeerBtn.addEventListener('click', handleGetRandomBeer)

getIngredients()

function handleGetRandomBeer() {
	const endpoint = baseURL + '/random'
	fetch(endpoint)
		.then((res) => res.json())
		.then(([beer]) => {
			if (!beer.image_url) return console.warn('cerveza sin imagen')

			const img = document.createElement('img')
			img.src = beer.image_url

			container.innerHTML = ''
			container.appendChild(img)
		})
}

function getIngredients() {
	const endpoint = baseURL + '/1'
	fetch(endpoint)
		.then((res) => res.json())
		.then(([beer]) => {
			const ingredients = []

			for (const ingredient in beer.ingredients)
				ingredients.push(ingredient)

			console.log(ingredients)
		})
}
