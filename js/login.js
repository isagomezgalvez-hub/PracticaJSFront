import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import LoginFormController from './controllers/LoginFormController.js';

window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.lds-ring');
	new LoaderController(loader);

	const errorElement = document.querySelector('.global-error')
	new ErrorController(errorElement);

	const formElement = document.querySelector('form')
	new LoginFormController(formElement);

})