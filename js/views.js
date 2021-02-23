export const ProductsView = (product) => {

  return `
	<div class="column">
	<div class="card-product">
	<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
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
      <time datetime="2016-1-1"> ${product.tags}</time>
    </div>
</div>
	<footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
  </footer>
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
}

export const Warning = () => {
  return `<div class="notification is-warning is-light">
  <button class="delete"></button>
  <strong>Atención:</strong> La contraseña debe contener al menos 6 carácteres, además debe contener Mayúsculas/minúsculas y números
  </div>`
}

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
}