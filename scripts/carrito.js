import { getProducts } from "./getProducts.js"
import { urlProduct, urlPopular } from "./url.js"

const urlCarrito = 'http://localhost:3000/carrito/'

const pintarCarro = document.getElementById('contenedorCarrito')

const contenedor1 = document.getElementById('contenedor')
const contenedor2 = document.getElementById('contenedor2')

const cantidadCarro = async () => {
    const respuesta = await fetch(urlCarrito);
    const data = await respuesta.json();

    document.getElementById('btnCarrito').innerHTML= `<ion-icon name="cart-outline" style="margin-right:10px;"></ion-icon>` + data.length
}

const getCarro = async () => {
    const respuesta = await fetch(urlCarrito);
    const data = await respuesta.json();
    data.forEach(element => {
        const { id, image, name, price } = element;
        pintarCarro.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${image}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${name}</h5>
                          <p class="card-text">${price}</p>
                          <button id="${id}" class="btn btn-danger">Eliminar</button>
                        </div>
                      </div>
                    </div>
                  </div>
       `
    });
}


contenedor1.addEventListener('click', async (e) => {
    const btnDetalle = e.target.classList.contains('btnAgregar1');
    console.log(btnDetalle);
    const id = e.target.id;
    if(btnDetalle){
        const listar = await getProducts(urlProduct)
        const objeto = listar.find(producto => producto.id === Number(id))
        
        await fetch(urlCarrito, {
            method: 'POST',
            body: JSON.stringify(objeto),
            headers: {
                "content-Type": "application/json; chartset=UTF-8"
            }
        })
    }
})


contenedor2.addEventListener('click', async (e) => {
    const btnDetalle = e.target.classList.contains('btnAgregar2');
    console.log(btnDetalle);
    const id = e.target.id;
    if(btnDetalle){
        const listar = await getProducts(urlPopular)
        const objeto = listar.find(producto => producto.id === Number(id))
        
        await fetch(urlCarrito, {
            method: 'POST',
            body: JSON.stringify(objeto),
            headers: {
                "content-Type": "application/json; chartset=UTF-8"
            }
        })
    }
})

pintarCarro.addEventListener('click', async (e) => {
    const btnEliminar = e.target.classList.contains('btn-danger');
    if (btnEliminar === true) {
        const id = e.target.id;
        await fetch(urlCarrito + id, {
            method: 'DELETE'
        })
    }
})

document.addEventListener('DOMContentLoaded', () => {
    getCarro();
    cantidadCarro();
})



