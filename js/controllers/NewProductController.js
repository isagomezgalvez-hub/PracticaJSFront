import BaseController from "./BaseController.js";
import DataService from '../service/DataService.js';

export default class NewProductController extends BaseController {
	constructor(element) {
		super(element);
		this.checkIfUserIsLogged();
		this.focusInInput();
		this.attachEventListeners()
	}
	async checkIfUserIsLogged() {
		const userIsLogged = await DataService.isUserLogged();
		if (!userIsLogged) {
			window.location.href = "/login.html"
		} else {
			this.publish(this.events.FINISH_LOADING);
		}
	}

	focusInInput() {
		const input = this.element.querySelector('input');
		input.focus()
	}

	attachEventListeners() {

		this.element.querySelectorAll('input').forEach(input => {
			const button = this.element.querySelector('button');
			input.addEventListener('keyup', event => {

				if (input.validity.valid) {
					input.classList.add('is-success');
					input.classList.remove('is-danger');
				} else {
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

		this.element.addEventListener('submit', async (event) => {
			event.preventDefault();
			const product = {
				nombre: this.element.elements.name.value,
				precio: this.element.elements.price.value,
				tags: this.element.elements.tags.value,
				descripcion: this.element.elements.description.value

			}

			this.publish(this.events.START_LOADING)
			try {
				await DataService.saveProduct(product);
				window.location.href = '/?datos=productoOK'
			} catch (error) {
				this.publish(this.events.ERROR)
			} finally {
				this.publish(this.events.FINISH_LOADING)
			}
		})

	}

}