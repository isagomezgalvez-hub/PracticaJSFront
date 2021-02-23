import BaseController from './BaseController.js';

import DataService from '../service/DataService.js';

export default class LoginOrRegisterController extends BaseController {
	constructor(element) {
		super(element);
		this.checkIfUserIsLogged();
	}

	async checkIfUserIsLogged() {
		const userIsLogged = await DataService.isUserLogged();
		if (userIsLogged) {
			const newProductButton = this.element.querySelector('.new-product-button');
			newProductButton.classList.remove('is-hidden');
		} else {
			const loginRegisterButton = this.element.querySelector('.login-register-button');
			loginRegisterButton.classList.remove('is-hidden');
		}
	}
}