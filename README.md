# black_russia.js
Mobile-API for [BlackRussia](https://blackrussia.online) an popular multiplayer mobile game about russia which is based on GTA San Andreas

## Example
```JavaScript
async function main() {
	const { BlackRussia } = require("./black_russia.js")
	const blackRussia = new BlackRussia()
	const donateItems = await blackRussia.getDonateItems()
  console.log(donateItems)
}

main()
```
