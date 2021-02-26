import DataService from '../service/DataService.js';
import BaseController from './BaseController.js';


export default class RegisterFormController extends BaseController {

	constructor(element) {
		super(element)
		this.attachEventListener();
	}

	attachEventListener() {
		this.element.addEventListener('submit', async (event) => {
			event.preventDefault();
			const user = {
				username: this.element.elements.email.value,
				password: this.element.elements.password.value
			}
			//Conecta con el Back-end
			this.publish(this.events.START_LOADING, {});
			try {
				const data = await DataService.login(user);
				DataService.saveToken(data.accessToken);

				let next = '/';
				const queryParams = window.location.search.replace('?', '');  // ?next=otrapagina -> next=otrapagina
				const queryParamsParts = queryParams.split('=');
				if (queryParamsParts.length >= 2 && queryParamsParts[0] === 'next') {
					next = queryParamsParts[1];
				}
				window.location.href = next;

			} catch (error) {
				this.publish(this.events.ERROR, error);
			} finally {
				this.publish(this.events.FINISH_LOADING, {})
			}
		})

		this.element.querySelectorAll('input').forEach(input => {
			const button = this.element.querySelector('button');
			input.addEventListener('keyup', event => {
				//Si el input es OK lo marco en Verde
				if (input.validity.valid) {
					input.classList.add('is-success');
					input.classList.remove('is-danger');
				} else { //Si el input es NO OK lo marco en rojo
					input.classList.add('is-danger')
					input.classList.remove('is-success');
				}
				if (this.element.checkValidity()) {
					button.removeAttribute('disabled')
				}
				else {
					button.setAttribute('disabled', true)
				}
			});
		});
	}
}


