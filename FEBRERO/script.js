// Variables
let counter = 0;
const frases = [
    "¿Porque no?, conmigo te divertiras",
    "¡Vamos, di que si!",
    "¡Anímate, este es el último intento!"
];

const noButton = document.getElementById('noButton');
const siButton = document.getElementById('siButton');
const fraseElement = document.getElementById('frase');
const respuestaElement = document.getElementById('respuesta');
const emojisElement = document.getElementById('emojis');

// Función para manejar el botón "No"
function handleNoClick() {
    if (counter < frases.length) {
        fraseElement.textContent = frases[counter];
        fraseElement.style.display = 'block';
        counter++;
    }

    if (counter >= 1) {
        const scale = Math.min(1 + counter * 0.8, 3); // Limitar el tamaño del botón "Sí"
        siButton.style.transform = `scale(${scale})`;
    }

    if (counter === 4) {
        siButton.style.transform = 'scale(4)';
        noButton.style.display = 'none';
    }

    if (counter === 3) {
        noButton.style.display = 'none';
    }

    if (counter === frases.length) {
        noButton.disabled = true;
    }
}

// Función para manejar el botón "Sí"
function handleSiClick() {
    fraseElement.style.display = 'none';
    respuestaElement.style.display = 'block';
    emojisElement.style.display = 'block';

    // Genera 200 emojis de manera aleatoria por toda la pantalla
    for (let i = 0; i < 200; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = Math.random() > 0.5 ? '😍' : '❤️'; // Emoji de carita enamorada o corazón
        emoji.style.position = 'absolute';
        emoji.style.top = Math.random() * 100 + 'vh'; // Posicionamiento aleatorio en el eje Y (100% de la pantalla)
        emoji.style.left = Math.random() * 100 + 'vw'; // Posicionamiento aleatorio en el eje X (100% de la pantalla)
        emoji.style.animationDuration = Math.random() * 2 + 1 + 's'; // Duración aleatoria para la animación
        emoji.style.animationDelay = Math.random() * 0.5 + 's'; // Retraso aleatorio para cada emoji
        emoji.style.fontSize = '30px'; // Tamaño adecuado de los emojis
        emoji.style.zIndex = '100'; // Asegura que se muestren sobre otros elementos

        emojisElement.appendChild(emoji);
    }

    // Cambiar el color del botón "Sí" cuando se presiona
    siButton.classList.add('clicked');
    siButton.disabled = true; // Deshabilitar el botón "Sí" después de hacer clic
}

// Asignar eventos a los botones
noButton.addEventListener('click', handleNoClick);
siButton.addEventListener('click', handleSiClick);
