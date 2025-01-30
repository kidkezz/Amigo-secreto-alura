// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let valor ; 
let longitud;
let numeroGenerado;







function agregarAmigo(){
    valor = document.getElementById('amigo').value;

    if(valor == ''){
        alert("Ingresa un Nombre porfavor");
    } else{
        listaAmigos(valor)
        reset();
    }

}


function reset(){
    let caja = document.querySelector('#amigo');
    caja.value = '';
}


function listaAmigos(elemento){
    caja = document.querySelector('#listaAmigos');
    

    if (nombres.includes(elemento)){
        alert(`${elemento} Ya se encuentra en la lista`)

    } else{
        nombres.push(elemento);
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = elemento;
        caja.appendChild(nuevoLi);

    }
    
}





function sortearAmigo() {
    let longitud = nombres.length;

    if (longitud === 0) {
        alert("No has ingresado ningún valor");
    } else {
        let numeroGenerado = Math.floor(Math.random() * longitud);
        let elegido = nombres[numeroGenerado];

        let cajaRes = document.querySelector("#resultado");

        // Verifica si ya existe un <li> dentro de #resultado
        let liRes = cajaRes.querySelector("li");

        if (liRes) {
            // Si ya hay un <li>, solo actualiza su contenido
            liRes.textContent = elegido;
        } else {
            // Si no hay un <li>, créalo y agrégalo
            liRes = document.createElement("li");
            liRes.textContent = elegido;
            cajaRes.appendChild(liRes);
        }
    }
}




