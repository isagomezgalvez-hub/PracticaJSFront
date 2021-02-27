import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import ProductController from './controllers/ProductController.js';

window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.lds-ring');
	new LoaderController(loader);

	const errorElement = document.querySelector('.global-error')
	new ErrorController(errorElement);

	const productElement = document.querySelector('.products-details')
	const detailsController = new ProductController(productElement)
	detailsController.loadProductDetails()

})