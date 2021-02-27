
const BASE_URL = 'http://127.0.0.1:8000';
const TOKEN_KEY = 'token';


export default {

	getProducts: async function () {
		const url = `${BASE_URL}/api/anuncios?_expand=user&_sort=id&_order=desc`;

		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json()

			return data.map(product => {
				const user = product.user || {};
				return {
					image: product.image || null,
					nombre: product.nombre.replace(/(<([^>]+)>)/gi, ""),
					precio: product.precio,
					descripcion: product.descripcion,
					tipoAnuncio: product.tipoAnuncio,
					author: product.user.username,
					id: product.id,
					date: product.createdAt || product.updatedAt,
				}
			})
		} else {
			throw new Error(`HTTP Error: ${response.status} `)
		}
	},

	post: async function (url, postData, json = true) {
		return await this.request('POST', url, postData, json)
	},

	delete: async function (url) {
		return await this.request('DELETE', url, {})
	},
	put: async function (url, putData, json = true) {
		return await this.request('PUT', url, putData, json)
	},

	request: async function (method, url, postData, json = true) {
		const config = {
			method: method,
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
			config.headers['Authorization'] = `Bearer ${token} `
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
		const currentUser = await this.getUser();
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id = urlParams.get('id');

		const url = `${BASE_URL}/api/anuncios?id=${id}`

		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			return data.map(product => {
				const user = product.user || {};
				return {
					image: product.image || null,
					nombre: product.nombre.replace(/(<([^>]+)>)/gi, ""),
					precio: product.precio,
					tipoAnuncio: product.tipoAnuncio,
					descripcion: product.descripcion,
					venta: product.venta,
					id: product.id,
					date: product.createdAt || product.updatedAt,
					canBeDeleted: currentUser ? currentUser.userId === product.userId : false
				}
			})

		}
	},



	getUser: async function () {
		try {
			const token = await this.getToken();
			const tokenPart = token.split('.');
			if (tokenPart.length !== 3) {
				return null;
			}
			const payload = tokenPart[1]; //cogemos el payload, certificado en token
			const jsonStr = atob(payload); // descodificamos el base64
			const { userId, username } = JSON.parse(jsonStr); // parseamos el JSON del token base64
			return { userId, username };
		} catch (error) {
			return null
		}
	},

	deleteProduct: async function (product) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id = urlParams.get('id');

		const url = `${BASE_URL}/api/anuncios/${id}`;
		return await this.delete(url);
	}

}
