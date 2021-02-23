
const BASE_URL = 'http://127.0.0.1:8000';
const TOKEN_KEY = 'token';


export default {

	getProducts: async function () {
		const url = `${BASE_URL}/api/anuncios?_expand=user`
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json()
			return data.map(product => {
				return {
					nombre: product.nombre,
					precio: product.precio,
					descripcion: product.descripcion,
					venta: product.venta,
					tags: product.tags,
					author: product.user.username,
				}
			})
		} else {
			throw new Error(`HTTP Error: ${response.status}`)
		}
	},

	post: async function (url, postData) {
		const config = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData),
		};
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
	}

}
