/* import ProductsListController from './controllers/ProductsListController.js'; */
import DataService from './service/DataService.js';
import ProductsListController from './controllers/ProductsListController.js';
import ErrorController from './controllers/ErrorController.js';

import LoaderController from './controllers/LoaderController.js';
import LoginOrRegisterController from './controllers/LoginOrRegisterController.js';
import NoDataController from './controllers/NoDataController.js';


window.addEventListener('DOMContentLoaded', (event) => {

	const loader = document.querySelector('.lds-ring');
	new LoaderController(loader);

	const NoDataElement = document.querySelector('.global-error')
	new NoDataController(NoDataElement);

	const element = document.querySelector('.home-products')
	const controller = new ProductsListController(element);
	controller.loadProducts();

	const errorElement = document.querySelector('.global-error')
	new ErrorController(errorElement);


	const newProductButtons = document.querySelector('.new-product')
	new LoginOrRegisterController(newProductButtons);

})