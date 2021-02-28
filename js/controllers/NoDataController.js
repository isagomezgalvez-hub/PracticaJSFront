import BaseController from "./BaseController.js";
import { NoDataView } from "../views.js";


export default class NoDataController extends BaseController {
	constructor(element) {
		super(element)
		this.subscribe(this.events.NO_DATA, () => {
			this.showNoDataMesagge()
		})
	}

	showNoDataMesagge() {
		this.element.innerHTML = NoDataView();
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