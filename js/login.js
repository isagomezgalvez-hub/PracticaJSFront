import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import LoginFormController from './controllers/LoginFormController.js';

window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.lds-ring');
	const loadController = new LoaderController(loader);

	const errorElement = document.querySelector('.global-error')
	const errorController = new ErrorController(errorElement);

	const formElement = document.querySelector('form')
	const formController = new LoginFormController(formElement);

})