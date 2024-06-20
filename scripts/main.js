fetch("https://randomfox.ca/floof")
	.then((response) => response.json())
	.then((convertedData) => {
		const foxImageElement = document.querySelector("#fox")
		foxImageElement.src = convertedData.image
	})
