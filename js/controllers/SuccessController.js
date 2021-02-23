import BaseController from "./BaseController.js";
import { UserSuccess } from "../views.js";


export default class SuccessController extends BaseController {
	constructor(element) {
		super(element),
			this.subscribe(this.events.SUCCESS, () => {
				this.showMessageSuccess()
			})
	}

	showMessageSuccess() {
		this.element.innerHTML = UserSuccess();
		this.element.classList.remove('hidden')
		this.element.addEventListener('click', (event) => {
			if (event.target == this.element || event.target.classList.contains('delete')) {
				this.element.classList.add('hidden');
			}
		});
	}


}