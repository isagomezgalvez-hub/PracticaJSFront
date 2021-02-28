
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
	 <div class="tipo">${product.tipoAnuncio}</div>
    </div>

    <div class="content">
      ${product.descripcion}
      <br>
      <time datetime="2016-1-1">${dateProduct}</time>
	 
   
    </div>
</div>
	
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
	let deleteButtonHTML = '';
	if (product[0].canBeDeleted) {
		deleteButtonHTML = '<button class="button is-danger">Borrar</button>';
	}

	return `<div class="container is-max-widescreen">
					<div class="columns">
						<div class="column has-text-right">
						${deleteButtonHTML}
						</div>
					</div>
					<div class="article-image">
						<figure class="image is-5by3 has-ratio">
							<img src="${product[0].image}" frameborder="0" allowfullscreen>
						</figure>
					</div>
					<div class="columns">
					<div class="column">
						<div class="title-details">
							<h2 class="title is-2">${product[0].precio}<span>€</span></h2>
							<h3 class="title is-3">${product[0].nombre}</h3>
						</div>
					</div>
					<div class="column has-text-right">
						<button class="button is-primary">${product[0].tipoAnuncio}</button>
						
					
					</div>
					</div>
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
};

export const RemoveProductMesagge = () => {
	return `<article class="message is-success" >
			<div class="message-header">
				<p>Enhorabuena</p>
				<button class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
			¡Producto eliminado con exito!
			</div>
		</article>`
};

export const NoDataView = () => {

	return `<article class="message is-warning">
  <div class="message-body">
   Lo sentimos, no tenemos datos para mostrar
  </div>
</article>`
}

