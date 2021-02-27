import BaseController from './BaseController.js';
import DataService from '../service/DataService.js';


export default class DeleteButtonController extends BaseController {

	constructor(element, product) {
		super(element);
		this.element.addEventListener('click', async (event) => {
			const deleteConfirmed = confirm('¿Seguro que quieres borrarlo?');

			if (deleteConfirmed) {

				await DataService.deleteProduct(product);
				this.publish(this.events.PRODUCT_DELETED, product);
				setTimeout(() => {
					window.location.href = "/"
				}, 500)

			}
		})
	}

}
