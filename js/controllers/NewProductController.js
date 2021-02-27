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
			window.location.href = "/login.html?next=/new-product.html"
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
				image: null,
				nombre: this.element.elements.name.value,
				tipoAnuncio: this.element.elements.tipo.value,
				precio: this.element.elements.price.value,
				descripcion: null,
			}

			if (this.element.elements.file.files.length > 0) {
				product.image = this.element.elements.file.files[0];
			}

			if (this.element.elements.description.value === null) {
				product.descripcion = ' '
			} else {
				product.descripcion = this.element.elements.description.value.replace(/(<([^>]+)>)/gi, "")
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