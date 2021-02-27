import BaseController from "./BaseController.js";
import { RemoveProductMesagge } from "../views.js";

export default class RemoveProductMesaggeController extends BaseController {
	constructor(element) {
		super(element)
		this.subscribe(this.events.PRODUCT_DELETED, () => {
			this.showMesagge()
		})
	}
	showMesagge() {
		this.element.innerHTML = RemoveProductMesagge();
		this.element.classList.remove('hidden')
	}

}