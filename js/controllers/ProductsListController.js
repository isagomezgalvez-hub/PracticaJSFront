import BaseController from './BaseController.js';

import DataService from '../service/DataService.js';
import { ProductsView } from '../views.js';

export default class ProductsListController extends BaseController {

	render(products) {
		for (const product of products) {
			const article = document.createElement('article');
			article.innerHTML = ProductsView(product);
			this.element.appendChild(article);
		}
	}
	async loadProducts() {
		this.publish(this.events.START_LOADING, {});
		try {
			const products = await DataService.getProducts();
			this.render(products);
		} catch (error) {
			this.publish(this.events.ERROR, error);
		} finally {
			this.publish(this.events.FINISH_LOADING, {})
		}
	}
}


