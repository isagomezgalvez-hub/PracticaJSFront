import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import WarningController from './controllers/WarningController.js';
import SuccessController from './controllers/SuccessController.js';
import RegisterFormController from './controllers/RegisterFormController.js';

window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.lds-ring');
	const loadController = new LoaderController(loader);

	const errorElement = document.querySelector('.global-error')
	const errorController = new ErrorController(errorElement);

	const warningElement = document.querySelector('.warning')
	const warningController = new WarningController(warningElement);

	const successElement = document.querySelector('.user-success')
	const successController = new SuccessController(successElement);

	const formElement = document.querySelector('form')
	const formController = new RegisterFormController(formElement);

})