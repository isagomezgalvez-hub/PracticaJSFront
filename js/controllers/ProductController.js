import BaseController from "./BaseController.js";

import DataService from '../service/DataService.js';
import { ProductDetails } from "../views.js";
import DeleteButtonController from './DeleteButtonController.js';

export default class ProductController extends BaseController {
	constructor(element) {
		super(element);
	};

	showProductDetails(product) {

		this.element.innerHTML = ProductDetails(product);
		const deleteButton = this.element.querySelector('button');
		if (deleteButton) {
			new DeleteButtonController(deleteButton, product);

		}

	};
	async loadProductDetails() {
		this.publish(this.events.START_LOADING, {});
		try {
			const product = await DataService.getProductsDetails();
			if (product.length === 0) {
				this.publish(this.events.NO_DATA, {});
			} else {
				this.showProductDetails(product);
			}

		} catch (error) {
			this.publish(this.events.ERROR, error);
		} finally {
			this.publish(this.events.FINISH_LOADING, {})
		}
	}
}