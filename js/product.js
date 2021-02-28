import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import NoDataController from './controllers/NoDataController.js'
import LogoutController from './controllers/LogoutController.js'
import RemoveProductMesaggeController from './controllers/RemoveProductMesaggeController.js'
import ProductController from './controllers/ProductController.js';



window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.lds-ring');
	new LoaderController(loader);

	const NoDataElement = document.querySelector('.global-error')
	new NoDataController(NoDataElement);

	const errorElement = document.querySelector('.global-error')
	new ErrorController(errorElement);

	const removeElement = document.querySelector('.global-error')
	new RemoveProductMesaggeController(errorElement);

	const LogoutElement = document.querySelector('.new-product')
	new LogoutController(LogoutElement);

	const productElement = document.querySelector('.products-details')
	const detailsController = new ProductController(productElement)
	detailsController.loadProductDetails()

})