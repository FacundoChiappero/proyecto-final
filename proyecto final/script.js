var submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", (e) => {

    var tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0]
    tabla.innerHTML=""
    var fila = tabla.insertRow(tabla.rows.length)

    var desde = document.getElementById("desde").value
    var hasta = document.getElementById("hasta").value
    var salida = document.getElementById("salida").value
    var vuelta = document.getElementById("vuelta").value
    var horaSalida = document.getElementById("horaSalida").value
    var cantPersonas = document.getElementById("cantPersonas").value
    var clase = document.getElementById("clase").value
    var dni = document.getElementById("dni").value
    var gmail = document.getElementById("gmail").value
    var tarjeta = document.getElementById("tarjeta").value
    var color = document.getElementById("color").value

    // var nombreDatos=["lugar de salida", "lugar de llegada", "fecha de salida", "fecha de vuelta", "hora de salida", "cantidad de personas", "clase en la que viaje", "dni", "gmail: ", "tarjeta: ", "color en codigo hexadecimal"]
    var datos = [desde, hasta, salida, vuelta, horaSalida, cantPersonas, clase, dni, gmail, tarjeta, color]

    // alert("lugar de salida: " + desde + "\nlugar de llegada: " + hasta + "\nfecha de salida: " + salida + "\nfecha de vuelta: " + vuelta + "\nhora de salida: " + horaSalida + "\ncantidad de personas: " + cantPersonas + "\nclase en la que viaje: " + clase + "\ndni: " + dni + "\ngmail: " + gmail + "\ntarjeta: " + tarjeta + "\ncolor en codigo hexadecimal: " + color)
    
    for (let i = 0; i < datos.length; i++) {

        let columna = fila.insertCell(i)
        columna.innerHTML = datos[i]
    }
    document.getElementsByTagName("form")[0].reset()
})