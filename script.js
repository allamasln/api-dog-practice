const randomBeerBtn = document.querySelector('#btn-random-beer')
const listBeersBtn = document.querySelector('#btn-list-beers')

const container = document.querySelector('main')

const baseURL = 'https://api.punkapi.com/v2/beers'

randomBeerBtn.addEventListener('click', handleGetRandomBeer)
listBeersBtn.addEventListener('click', handleGetBeers)

getIngredients()

function handleGetBeers() {
	const endpoint = baseURL
	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			const beerImagesURL = data.map((beer) => beer.image_url)

			resetContainer()
			appendImages(beerImagesURL)
		})
}

function handleGetRandomBeer() {
	const endpoint = baseURL + '/random'
	fetch(endpoint)
		.then((res) => res.json())
		.then(([beer]) => {
			if (!beer.image_url) return console.warn('cerveza sin imagen')

			resetContainer()
			appendImage(beer.image_url)
		})
}

function resetContainer() {
	container.innerHTML = ''
}

function appendImage(url) {
	const img = document.createElement('img')
	img.src = url

	container.appendChild(img)
}

function appendImages(urls) {
	urls.forEach((url) => appendImage(url))
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
