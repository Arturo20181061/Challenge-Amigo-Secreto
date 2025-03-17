let amigosSorteo = [];

function asignarTextoElemento(elemento, texto){
    let variable = document.querySelector (elemento);
    variable.innerHTML = texto;
    return;
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigosSorteo.forEach(nombre => {
        let item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function agregarAmigo(){
    let nombreDelUsuario = document.getElementById('amigo').value.trim();
    console.log(nombreDelUsuario);
    
    if (nombreDelUsuario !== ''){
        amigosSorteo.push(nombreDelUsuario);
        document.getElementById('amigo').value = '';
        actualizarLista();
    }else{
        alert('campo vacio');
    }
    return;
}

function sortearAmigo(){
    if (amigosSorteo.length === 0){
        alert('No hay amigos que sortear');
    }
    let indiceAmigo = Math.floor(Math.random()*amigosSorteo.length);
    let amigoSecreto = amigosSorteo[indiceAmigo];
    asignarTextoElemento('#resultado', `El amigo secreto es: ${amigoSecreto}`);
    
    amigosSorteo = [];
    actualizarLista();
}