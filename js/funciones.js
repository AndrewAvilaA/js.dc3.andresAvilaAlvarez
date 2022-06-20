function calcular (parCantidad, parValor){
    let precio = parseFloat(parCantidad * parValor)
    console.log("La tarifa para esta compra es de "+precio+"$")
    alert("La tarifa para esta compra es de "+precio+"$")
    return precio
}

function generadorAutomatico() {
    productos.push(new Producto("ARIEL", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("AURORA", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("BLANCANIEVES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("DOLORES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("GROGU / BABY YODA", "STAR WARS", 3500))
    productos.push(new Producto("HIPOPOTAMO", "ANIMALES", 3000))
    productos.push(new Producto("LEIA", "STAR WARS", 3000))
    productos.push(new Producto("MOANA", "PRINCESA DISNEY", 3300))
    productos.push(new Producto("MOZART", "HISTORIA / MUSICA", 4000))
    productos.push(new Producto("PADME", "STAR WARS", 3000))
    productos.push(new Producto("SERENA", "SAILOR MOON / ANIME", 3000))
    productos.push(new Producto("TIGER", "ANIMALES", 3600))
}

generadorAutomatico()

function generadorDeCarrito() {
    carrito.push(new Producto("AURORA", "PRINCESA DISNEY", 3400))
    carrito.push(new Producto("HIPOPOTAMO", "ANIMALES", 3000))
    carrito.push(new Producto("PADME", "STAR WARS", 3000))
    carrito.push(new Producto("MOZART", "HISTORIA / MUSICA", 4000))
}

generadorDeCarrito()

function calcularCarrito(){
    debugger
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        console.table(carrito)
        console.log ("El total de tu compra: ",total,"$")
}

function listarProductos(){
    debugger
    productos.forEach( (producto)=>{
        console.log(producto.nombre)
    })
}

function busquedaPorNombre(){
    debugger
    let aBuscar = prompt("¡Buscá amigurumis por su nombre! Ingresá el del amigurumi que buscás").toUpperCase()
    let resultado = productos.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined){
            console.table(resultado)
        }
}

function busquedaPorTipo(){
    debugger
    let aBuscar = prompt("¡Buscá amigurumis según su tipo! Ingresá la categoría del amigurumi").toUpperCase()
    let resultado = productos.filter((producto)=> producto.tipo.includes(aBuscar))
        if (resultado !== undefined){
            console.table(resultado)
        }  
}

function cargarProductos() {
    debugger
    listadoFrutas.innerHTML = ""
    for (const producto of productos){
        const li = document.createElement("li")
                li.className = "collection-item blue-text"
                li.innerText = producto
                li.id = producto + "Prod"
                listadoFrutas.append(li)
        listadoFrutas.innerHTML += "<li class='collection-item'>"+producto+"</li>"
    }
}

const cartelPersonal = document.getElementById("cartelPersonal")

function presupuestarCartel(){
    debugger
    cartelPersonal.innerHTML = ""
    let cartel = prompt("Escribí lo que va a decir tu cartel (nombre o apodo) \n ¡Vamos a calcular su precio! ")
            let letras = cartel.length
            console.log ("Tu cartel tiene ",letras," letras")
            let precio = calcular (letras, precioLetra)
            cartelPersonal.innerHTML += "<h3>"+cartel+"</h3><p> Tu cartel tiene un valor de "+precio+" pesos.</p>"
}
