from requests import get

class BlackRussia:
	def __init__(self) -> None:
		self.api = "http://api.blackrussia.online"
		self.headers = {
			"user-agent": "Dalvik/2.1.0 (Linux; U; Android 9; RMX3551 Build/PQ3A.190705.003)"
		}

	def get_donate_items(self) -> dict:
		return get(
			f"{self.api}/donate-items.json",
			headers=self.headers).json()

	def get_admin_list(self) -> list:
		return get(
			f"{self.api}/admins-list.json",
			headers=self.headers).json()

	def get_car_colors(self) -> dict:
		return get(
			f"{self.api}/car-colors.json",
			headers=self.headers).json()

	def get_servers(self) -> list:
		return get(
			f"{self.api}/servers.json",
			headers=self.headers).json()

	def get_black_pass(self) -> dict:
		return get(
			f"{self.api}/black-pass.json",
			headers=self.headers).json()

	def get_tune_items(self) -> dict:
		return get(
			f"{self.api}/tune-items.json",
			headers=self.headers).json()

	def get_tune_screens(self) -> list:
		return get(
			f"{self.api}/tune-screens.json",
			headers=self.headers).json()

	def get_tune_vinyls(self) -> list:
		return get(
			f"{self.api}/tune-vinyls.json",
			headers=self.headers).json()

	def get_cars_and_accessories(self) -> dict:
		return get(
			f"{self.api}/cars-and-accessories.json",
			headers=self.headers).json()

	def get_inventory(self) -> dict:
		return get(
			f"{self.api}/client/inventory.json",
			headers=self.headers).json()

	def get_social_interaction(self) -> dict:
		return get(
			f"{self.api}/client/social-interaction.json",
			headers=self.headers).json()

	def get_family_system(self) -> dict:
		return get(
			f"{self.api}/client/family_system.json",
			headers=self.headers).json()

	def get_stories(self) -> list:
		return get(
			f"{self.api}/stories.json",
			headers=self.headers).json()
