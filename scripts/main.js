import { getProducts } from "./getProducts.js";
import { showProduct, showProduct2 } from "./showProduct.js";
import { urlPopular, urlProduct } from "./url.js";

const contenedor = document.getElementById('contenedor');
const contenedor2 = document.getElementById('contenedor2')

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getProducts(urlProduct);
    const data2 = await getProducts(urlPopular)
    showProduct(data, contenedor)
    showProduct2(data2, contenedor2)
})

contenedor.addEventListener('click', async (e) => {
    const btnDetalle = e.target.classList.contains('card-img-top');
    const id = e.target.id;
    if(btnDetalle){
        const listar = await getProducts(urlProduct)
        const objeto = listar.find(producto => producto.id === Number(id))

        localStorage.setItem("detalleProducto", JSON.stringify(objeto))
        window.location.href = 'detail.html';
    }
})

contenedor2.addEventListener('click', async (e) => {
    const btnDetalle = e.target.classList.contains('card-img-top');
    const id = e.target.id;
    if(btnDetalle){
        const listar = await getProducts(urlPopular)
        const objeto = listar.find(producto => producto.id === Number(id))

        localStorage.setItem("detalleProducto2", JSON.stringify(objeto))
        window.location.href = 'detail2.html';
    }
})



