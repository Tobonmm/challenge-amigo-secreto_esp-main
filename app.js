let amigo= []; //Creamos el array donde se guardaran los nombres de amigos

//INGRESO DE DATOS EN EL CUADRO DE TEXTO
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); //Captura lo ingresado en el campo de texto
    let nombreAmigo = inputAmigo.value;  //Guarda el valor que digito

    if(!nombreAmigo) {   //Verifica si no ingreso el nombre de un amigo
        alert("Debes ingresar el nombre de algun amigo"); 
        return;

    }

    amigo.push(nombreAmigo); //Agrega el amigo del campo de texto a la lista
    inputAmigo.value = "";  //Limpa cuadro de texto
    inputAmigo.focus(); //Da focus al cuadro de texto
    renderizarAmigos();
};

//AGREGA LOS AMIGOS DIGITADOS A LA LISTA
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";   //Limpiar la lista de amigos

    for (let i = 0; i < amigo.length; i++) {  //Delimita el for hasta el indice del ultimo amigo agregado (0,1,2...)                                    
         let item = document.createElement("li");  //Crea una lista dinamica html
         item.textContent = amigo[i]; 
          listaAmigos.appendChild(item);

        }

}

//SORTEA UN NUMERO RANDOM Y LO ASIGNA A EL NUMERO DE INDICE DE LA LISTA
function sortearAmigo() {

   if(amigo.length === 0) {  //Verifica si hay algo ingresado estrictamente.
      alert("No hay amigos para sortear, ingresa algunos.");
      return;

   }

   let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; //Sacaun numero random y lo sortea en el indice de la lista
   let resultado = document.getElementById ("resultado");
   resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; //El numero random lo asigna al indice de la lista, asignando el nombre que esta en ese indice

   let limpiarLista = document.getElementById("listaAmigos");
   limpiarLista.innerHTML = "";  //Limpia la lista

}