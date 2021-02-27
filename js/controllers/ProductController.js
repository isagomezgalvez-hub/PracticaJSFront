import BaseController from "./BaseController.js";

import DataService from '../service/DataService.js';
import { ProductDetails } from "../views.js";


export default class ProductController extends BaseController {
	constructor(element) {
		super(element);
	};

	showProductDetails(product) {
		this.element.innerHTML = ProductDetails(product);
	};
	async loadProductDetails() {
		this.publish(this.events.START_LOADING, {});
		try {
			const product = await DataService.getProductsDetails();
			this.showProductDetails(product);
		} catch (error) {
			this.publish(this.events.ERROR, error);
		} finally {
			this.publish(this.events.FINISH_LOADING, {})
		}
	}
}