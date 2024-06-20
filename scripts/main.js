fetch("https://randomfox.ca/floof")
	.then((response) => response.json())
	.then((convertedData) => {
		const foxImageElement = document.querySelector("#fox")
		foxImageElement.src = convertedData.image
	})

const getTheCat = async () => {
	const response = await fetch(
		"http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false"
	)
	const convertedData = await response.json()
	const catImageElement = document.querySelector("#cat")
	catImageElement.src = convertedData[0]
}

getTheCat()
