// Crear un botton PERRO ALEATORIO que obtenga una imagen random de un perro
// al hacer click y cree el elemento en pantalla

getAllBreeds()

function getAllBreeds() {
	const endpoint = 'https://dog.ceo/api/breeds/list/all'
	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			const breeds = []

			for (const breed in data.message) breeds.push(breed)

			console.log(breeds)
		})
}
