import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import WarningController from './controllers/WarningController.js';
import SuccessController from './controllers/SuccessController.js';
import RegisterFormController from './controllers/RegisterFormController.js';

window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.lds-ring');
	new LoaderController(loader);

	const errorElement = document.querySelector('.global-error')
	new ErrorController(errorElement);

	const successElement = document.querySelector('.user-success')
	new SuccessController(successElement);

	const formElement = document.querySelector('form')
	new RegisterFormController(formElement);

})