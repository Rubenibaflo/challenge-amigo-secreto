// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); // Eliminar espacios en blanco al inicio y al final de la cadena de texto

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
     // Agregar el nombre al array si no está repetido
     if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Mostrar la lista actualizada en la página
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para mostrar la lista en la página
function actualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada amigo a la lista
    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}- ${amigo}`;
        listaElement.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 nombres para hacer el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultado
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎁</li>`;
}

