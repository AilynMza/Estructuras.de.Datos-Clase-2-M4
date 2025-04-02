let listaDeCompras = new Set ();

const agregarProducto = (producto) => {
    listaDeCompras.add(producto);
};

const eliminarProducto = (producto) => {
    return listaDeCompras.delete(producto);
}
const imprimirProducto = (producto) => {
    console.log(producto);
    const productoElement = document.createElement("p");
    productoElement.textContent = producto;
    document.getElementById("listaDeCompras").appendChild(productoElement);
}

const mostrarLista = () => {
    console.log("Lista de compras:\n\n")
    document.getElementById("listaDeCompras").innerHTML = "";
    listaDeCompras.forEach(imprimirProducto)
    
}

// Ejemplo de uso

agregarProducto("Zapato");
agregarProducto("Zapato");
agregarProducto("Libro");
eliminarProducto("libro") //No lo elimina porque no es exactamente igual
agregarProducto("Pasta de dientes")
agregarProducto("Arroz")
agregarProducto("Jugo de manzana")
eliminarProducto("Zapato")

mostrarLista();