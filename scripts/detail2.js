import { getProducts } from "./getProducts.js"
import { showProduct } from "./showProduct.js"
import { urlPopular } from "./url.js"

const detalleProducto = JSON.parse(localStorage.getItem('detalleProducto2'))
const container = document.getElementById('container')
const container2 = document.getElementById('container2')

const getDetalle = () => {
    const {image, name, price} = detalleProducto;
    container.innerHTML += `
    <img src="${image}" alt="" class="col">
    <div class="col">
        <h1>${name}</h1>
        <h2>${price}</h2>
        <p>precios con iva incluido</p>
    </div>
    `
}

const pintarProducts = async () => {
    const data = await getProducts(urlPopular)
    showProduct(data, container2)
}

document.addEventListener('DOMContentLoaded', () => {
    getDetalle();
    pintarProducts();
})
 