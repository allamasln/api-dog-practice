const randomDogBtn = document.querySelector('#btn-random-dog')
const listDogsBtn = document.querySelector('#btn-list-dogs')
const container = document.querySelector('main')
const select = document.querySelector('select')
const baseURL = 'https://dog.ceo/api/breeds'

randomDogBtn.addEventListener('click', handleGetRandomDog)
listDogsBtn.addEventListener('click', handleGetDogsByBreed)

loadBreeds()

function renderDogsImagesByBreed(breed) {
	// AQUI TU CODIGO
	// OBTENGA IMAGENES DE ESA RAZA

	console.log(breed)
}

function handleGetDogsByBreed() {
	renderDogsImagesByBreed(select.value)
}

function handleGetRandomDog() {
	const endpoint = baseURL + '/image/random'
	fetch(endpoint)
		.then((res) => res.json())
		.then(({ message: dogImageURL }) => {
			if (!dogImageURL) return console.warn('cerveza sin imagen')

			resetContainer()
			appendImage(dogImageURL)
		})
}

function loadBreeds() {
	const endpoint = baseURL + '/list/all'

	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			const breeds = []

			for (const breed in data.message) breeds.push(breed)

			breeds.forEach((breed) => {
				const option = document.createElement('option')
				option.textContent = breed
				option.value = breed
				select.appendChild(option)
			})
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
