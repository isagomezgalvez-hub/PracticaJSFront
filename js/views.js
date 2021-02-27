
export const ProductsView = (product) => {
	/* Obtener la imagen */
	let imgHTML = '';
	if (product.image) {
		imgHTML = `<figure class="image is-4by3">
   
      <img src="${product.image}" alt="Placeholder image">
    </figure>`
	}

	/* Obtener la fecha */
	const date = new Date(`${product.date}`)
	const dateProduct = (new Intl.DateTimeFormat('es-ES').format(date));

	return `
  <div class="card-product">
	<div class="card">
  <div class="card-image">
    ${imgHTML}
    
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${product.precio}€</p>
        <p class="subtitle is-6">${product.nombre}</p>
      </div>
    </div>
    <div class="content">
      ${product.descripcion}
      <br>
      <time datetime="2016-1-1">${dateProduct}</time>
   
    </div>
</div>
	<footer class="card-footer">
    <a href="#" class="card-footer-item">Editar</a>
    <a href="#" class="card-footer-item">Borrar</a>
  </footer>
  </div>
</div>

`;
};


export const ErrorView = (errorMesagge) => {
	return `<article class="message is-danger">
			<div class="message-header">
				<p>Error</p>
				<button class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
				${errorMesagge}
			</div>
		</article>`
};

export const Warning = () => {
	return `<div class="notification is-warning is-light">
  <button class="delete"></button>
  <strong>Atención:</strong> La contraseña debe contener al menos 6 carácteres, además debe contener Mayúsculas/minúsculas y números
  </div>`
};

export const UserSuccess = () => {
	return `<article class="message is-success">
			<div class="message-header">
				<p>Enhorabuena</p>
				<button class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
				¡Usuario creado con exito!
			</div>
		</article>`
};

export const ProductDetails = (product) => {
	return `<div class="container is-max-widescreen">
					<div class="columns">
						<div class="column">
							<h4 class="title is-4">Autor@</h4>
						</div>
						<div class="column has-text-right">
							<button class="button is-primary">Editar</button>
						</div>
					</div>
					<div class="article-image">
						<figure class="image is-5by3 has-ratio">
							<img src="${product[0].image}" frameborder="0" allowfullscreen>
						</figure>
					</div>

					<h2 class="title is-2">${product[0].precio}<span>€</span></h2>
					<h3 class="title is-3">${product[0].nombre}</h3>
					<p>${product[0].descripcion}</p>

					<hr>
					<div class="columns">
						<div class="column">
							<time>${product[0].date}</time>
						</div>
						<div class="column has-text-right">
							<span class="icon">
								<i class="fas fa-eye"></i>
							</span>
							<span class="icon">
								<i class="fas fa-heart"></i>
							</span>
						</div>
					</div>
				</div>`
}

