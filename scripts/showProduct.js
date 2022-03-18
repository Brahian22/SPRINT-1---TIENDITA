
export const showProduct = (datos, contenedor) => {
    datos.forEach(element => {
        const {id, descuento, name, price, price2, image} = element
        contenedor.innerHTML += `
        <div class= "carta">
        <h6 class="descuento">${descuento}</h6>
        <img src="${image}" class="card-img-top" alt="..." id="${id}">
        <div class="card-body">
          <h5 class="card-title">${price} <p class="inline text-muted text-decoration-line-through">${price2}</p></h5>
          <p class="card-text inline">${name}</p>
          <button class="btn btn-success btnAgregar1 mt-5" id="${id}">Agregar</button>
        </div>
      </div>
        `
    });
} 

export const showProduct2 = (datos, contenedor) => {
  datos.forEach(element => {
      const {id, name, price, image} = element
      contenedor.innerHTML += `
      <div class= "carta">
      <img src="${image}" class="card-img-top" alt="..." id="${id}">
      <div class="card-body">
        <h5 class="card-title">${price}</h5>
        <p class="card-text">${name}</p>
        <button class="btn btn-success btnAgregar2" id="${id}">Agregar</button>
      </div>
    </div>
      `
  });
} 