/* import ProductsListController from './controllers/ProductsListController.js'; */
import DataService from './service/DataService.js';
import ProductsListController from './controllers/ProductsListController.js';
import ErrorController from './controllers/ErrorController.js';

import { ProductsView } from './views.js';
import LoaderController from './controllers/LoaderController.js';
import LoginOrRegisterController from './controllers/LoginOrRegisterController.js';


window.addEventListener('DOMContentLoaded', (event) => {

	const loader = document.querySelector('.lds-ring');
	const loadController = new LoaderController(loader);

	const element = document.querySelector('.home-products')
	const controller = new ProductsListController(element);
	controller.loadProducts();

	const errorElement = document.querySelector('.global-error')
	const errorController = new ErrorController(errorElement);

	const newProductButtons = document.querySelector('.new-product')
	const newProductController = new LoginOrRegisterController(newProductButtons);

})