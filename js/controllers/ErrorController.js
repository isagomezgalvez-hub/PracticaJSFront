import BaseController from "./BaseController.js";
import { ErrorView } from "../views.js";


export default class ErrorController extends BaseController {
	constructor(element) {
		super(element)
		this.subscribe(this.events.ERROR, (error) => {
			this.showError(error)
		})
	}

	showError(errorMesagge) {
		this.element.innerHTML = ErrorView(errorMesagge);
		this.element.classList.remove('hidden')
		this.element.addEventListener('click', (event) => {
			if (event.target == this.element || event.target.classList.contains('delete')) {
				this.element.classList.add('hidden');
			}
		});

		document.body.addEventListener('keydown', (event) => {
			if (event.keyCode == 27) {
				this.element.classList.add('hidden');
			}
		})
	}


}