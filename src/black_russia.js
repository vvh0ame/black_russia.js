class BlackRussia {
	constructor() {
		this.api = "http://api.blackrussia.online"
		this.headers = {
			"user-agent": "Dalvik/2.1.0 (Linux; U; Android 9; RMX3551 Build/PQ3A.190705.003)"
		}
	}

	async getDonateItems() {
		const response = await fetch(
			`${this.api}/donate-items.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAdminList() {
		const response = await fetch(
			`${this.api}/admins-list.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCarColors() {
		const response = await fetch(
			`${this.api}/car-colors.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getServers() {
		const response = await fetch(
			`${this.api}/servers.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBlackPass() {
		const response = await fetch(
			`${this.api}/black-pass.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTuneItems() {
		const response = await fetch(
			`${this.api}/tune-items.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTuneScreens() {
		const response = await fetch(
			`${this.api}/tune-screens.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTuneVinyls() {
		const response = await fetch(
			`${this.api}/tune-vinyls.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCarsAndAccessories() {
		const response = await fetch(
			`${this.api}/cars-and-accessories.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getInventory() {
		const response = await fetch(
			`${this.api}/client/inventory.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSocialInteraction() {
		const response = await fetch(
			`${this.api}/client/social-interaction.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFamilySystem() {
		const response = await fetch(
			`${this.api}/client/family_system.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getStories() {
		const response = await fetch(
			`${this.api}/stories.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {BlackRussia}
