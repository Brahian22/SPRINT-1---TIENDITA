import { getProducts } from "./getProducts.js"
import { showProduct } from "./showProduct.js"
import { urlProduct } from "./url.js"

const detalleProducto = JSON.parse(localStorage.getItem('detalleProducto'))
const container = document.getElementById('container')
const container2 = document.getElementById('container2')

const getDetalle = () => {
    const {image, name, price} = detalleProducto;
    container.innerHTML += `
    <img src="${image}" alt="" class="col">
    <div class="col">
        <h1>${name}</h1>
        <h2>${price}</h2>
        <p class="fs-5">Precios con iva incluido</p>
        <p class="fs-4">Peso aproximado por pieza , puede variar de acuerdo al peso real</p>
        <h3>Selecciona la madurez que deseas</h3>
        <select class="form-select  form-select-lg mb-3" aria-label="Default select example">
            <option selected>Por elegir</option>
            <option value="1">Maduro (para hoy)</option>
            <option value="2">Normal (3-5 dias)</option>
            <option value="3">Verde (7 dias)</option>
          </select>
    </div>
    `
}

const pintarProducts = async () => {
    const data = await getProducts(urlProduct)
    showProduct(data, container2)
}

document.addEventListener('DOMContentLoaded', () => {
    getDetalle();
    pintarProducts();
})
 