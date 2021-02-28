import BaseController from './BaseController.js';

import DataService from '../service/DataService.js';

export default class LogoutController extends BaseController {
	constructor(element) {
		super(element);
		this.checkIfUserIsLogged();
	}

	async checkIfUserIsLogged() {
		const userIsLogged = await DataService.isUserLogged();
		if (userIsLogged) {
			const LogoutButton = this.element.querySelector('.logout-button');
			LogoutButton.classList.remove('is-hidden');
			LogoutButton.addEventListener('click', async (event) => {
				window.localStorage.removeItem('token');

			})

		} else {
			const loginRegisterButton = this.element.querySelector('.login-register-button');
			loginRegisterButton.classList.remove('is-hidden');
		}
	}


}
