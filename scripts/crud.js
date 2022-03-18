const urlCrud = 'http://localhost:3001/productos/'

const pintarCrud = document.getElementById('containerCrud')

document.getElementById('inputId').style.display = 'none';

const getCrud = async () => {

    const respuesta = await fetch(urlCrud);
    const data = await respuesta.json();
    data.forEach(element => {
        const { id, name, price, image } = element;
        pintarCrud.innerHTML += `
        <div class="col">
        <div class="card h-100">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${price}</p>
            <button class="btn btn-danger" id="${id}">Eliminar</button>
          </div>
        </div>
      </div>
       `
    });

}

document.addEventListener('DOMContentLoaded', getCrud)

pintarCrud.addEventListener('click', async (e) => {
    const btnEliminar = e.target.classList.contains('btn-danger');

    if (btnEliminar === true) {
        const id = e.target.id;
        await fetch(urlCrud + id, {
            method: 'DELETE'
        })
    }

})

const capturaDatos = () => {

    const image = document.getElementById('inputUrl').value;
    const name = document.getElementById('inputNombre').value;
    const price = document.getElementById('inputPrecio').value;
   

      const user = {
            image,
            name,
            price
        }

    return user;
}

const form = document.querySelector('.form-group');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objeto = capturaDatos();

    await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

})

const btnNombre = document.getElementById('btnNombre');

btnNombre.addEventListener('click', async () => {

    const input = document.getElementById('inputNombre').value;
    const resp = await fetch(urlCrud);
    const lista = await resp.json()
    const buscado = lista.find(u => u.name.toLocaleLowerCase() === input.toLocaleLowerCase())
    if (buscado !== undefined) {
        const { id, name, price } = buscado;
        document.getElementById('inputUrl').value = buscado.image;
        document.getElementById('inputNombre').value = name;
        document.getElementById('inputPrecio').value = price;
        document.getElementById('inputId').value = id;
    } else {
        alert('Producto no encontrado')
    }

})

const btnModificar = document.getElementById('btnModificar');

btnModificar.addEventListener('click', async () => {

    const dataMod = capturaDatos();
    const {image,name,price} = dataMod;
   
    if(image === "",name === "",price === ""){
        alert('Llenar todos los campos')
    }
    else{
        const id = document.getElementById('inputId').value;
        console.log(dataMod)
        await fetch(urlCrud + id, {
            method: 'PUT',
            body: JSON.stringify(dataMod),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }

})

