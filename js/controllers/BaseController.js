import pubSub from '../service/Pubsub.js'

export default class BaseController {

	constructor(element) {
		this.element = element;
		this.pubSub = pubSub;
		this.events = {
			START_LOADING: 'startLoading',
			FINISH_LOADING: 'finishLoading',
			SUCCESS: 'success',
			WARNING: 'warning',
			ERROR: 'error',
			PRODUCT_DELETED: 'productDeleted'
		}
	}

	subscribe(eventName, eventHandler) {
		this.pubSub.subscribe(eventName, eventHandler);
	}

	publish(eventName, eventData) {
		this.pubSub.publish(eventName, eventData);
	}

}