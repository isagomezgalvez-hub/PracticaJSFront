
const BASE_URL = 'http://127.0.0.1:8000';
const TOKEN_KEY = 'token';


export default {

	getProducts: async function () {
		const url = `${BASE_URL}/api/anuncios?_expand=user&_sort=id&_order=desc`
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json()
			return data.map(product => {
				return {
					image: product.image || null,
					nombre: product.nombre.replace(/(<([^>]+)>)/gi, ""),
					precio: product.precio,
					descripcion: product.descripcion,
					venta: product.venta,
					author: product.user.username,
					id: product.id,
					date: product.createdAt || product.updatedAt
				}
			})
		} else {
			throw new Error(`HTTP Error: ${response.status}`)
		}
	},

	post: async function (url, postData, json = true) {
		const config = {
			method: 'POST',
			headers: {},
			body: null,
		};
		if (json) {
			config.headers['Content-Type'] = 'application/json';
			config.body = JSON.stringify(postData);
		} else {
			config.body = postData;
		}
		const token = await this.getToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		const response = await fetch(url, config)
		const data = await response.json()
		if (response.ok) {
			return data;
		} else {
			throw new Error(data.message || JSON.stringify(data));
		}
	},

	RegisterUser: async function (user) {
		const url = `${BASE_URL}/auth/register`
		return await this.post(url, user);
	},

	login: async function (user) {
		const url = `${BASE_URL}/auth/login`
		return await this.post(url, user);
	},

	saveToken: async function (token) {
		localStorage.setItem(TOKEN_KEY, token)
	},

	getToken: async function (token) {
		return localStorage.getItem(TOKEN_KEY)
	},

	isUserLogged: async function () {
		const token = await this.getToken();
		return token !== null;
	},
	saveProduct: async function (product) {
		const url = `${BASE_URL}/api/anuncios`;
		if (product.image) {
			const imageURL = await this.uploadImage(product.image);
			product.image = imageURL
		}
		return await this.post(url, product);
	},

	uploadImage: async function (image) {
		const form = new FormData();
		form.append('file', image);

		const url = `${BASE_URL}/upload`;
		const response = await this.post(url, form, false);
		console.log('UPLOAD IMAGE', response)
		return response.path || null;

	},

	getProductsDetails: async function (product) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id = urlParams.get('id');

		const url = `${BASE_URL}/api/anuncios?id=${id}`

		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json()
			return data.map(product => {
				return {
					image: product.image || null,
					nombre: product.nombre,
					precio: product.precio,
					descripcion: product.descripcion,
					venta: product.venta,
					date: product.createdAt || product.updatedAt
				}
			})
		} else {
			throw new Error(`HTTP Error: ${response.status}`)
		}
	}
}
