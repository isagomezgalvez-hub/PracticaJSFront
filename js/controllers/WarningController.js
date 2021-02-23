import BaseController from "./BaseController.js";
import { Warning } from "../views.js";

export default class WarningController extends BaseController {
	constructor(element) {
		super(element)
		this.subscribe(this.events.WARNING, (warning) => {
			this.showWarning(warning)
		})
	}
	showWarning(warning) {
		this.element.innerHTML = Warning();
		this.element.classList.remove('hidden')
	}

}