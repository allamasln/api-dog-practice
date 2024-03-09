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
