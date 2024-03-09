// CAPTURAS DE ELEMENTOS DEL DOM

const randomDogBtn = document.querySelector('#btn-random-dog')
const listDogsBtn = document.querySelector('#btn-list-dogs')
const container = document.querySelector('main')
const select = document.querySelector('select')
const baseURL = 'https://dog.ceo/api/breeds'

// CONFIGURACIÓN EVENTOS

randomDogBtn.addEventListener('click', handleGetRandomDog)
listDogsBtn.addEventListener('click', handleGetDogsByBreed)

// HIDRATA EL SELECT CON RAZAS DE PERROS
loadBreeds()

// EN FUNCIÓN DE LA RAZA PASADA POR ARGUMENTO DEBE ADJUNTAR AL CONTAINER TODAS LAS IMAGENES OBTENIDAS DE LA API PARA ESA RAZA

function renderDogsImagesByBreed(breed) {
	// ---------------AQUI TU CODIGO --------
	// OBTENGA IMAGENES DE ESA RAZA

	console.log(breed)
}

// FUNCION MANEJADORA PARA EL EVENTO DEL BOTON QUE LISTA POR RAZAS

function handleGetDogsByBreed() {
	renderDogsImagesByBreed(select.value)
}

// FUNCION MANEJADORA PARA EL EVENTO DEL BOTON QUE OBIENE PERRO ALEATORIO

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

// FUNCION QUE HIDRATA AL CARGAR EL SITE EL SELECT CON RAZAS DE PERROS

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

// FUNCIONES HELPERS PARA MANIPULACIÓN DEL DOM

// BORRA TODO EL CONTENIDO DEL CONTAINER
function resetContainer() {
	container.innerHTML = ''
}

// RECIBE UNA URL POR ARGUMENTO, CREA IMAGEN Y LO AÑADE AL CONTENEDOR
function appendImage(url) {
	const img = document.createElement('img')
	img.src = url

	container.appendChild(img)
}

// RECIBE UN ARRAY DE URLs POR ARGUMENTO, CREA TODAS LAS IMAGENES Y LAS AÑADE AL CONTAINER
function appendImages(urls) {
	urls.forEach((url) => appendImage(url))
}
