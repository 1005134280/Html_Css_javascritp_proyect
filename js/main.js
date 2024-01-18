function triggerShake() {
    var miImg = document.getElementById('miImg');
    miImg.classList.add('shake'); // Agrega la clase 'shake' para activar la animación
    var audio = new Audio('../media/Pokemon (A Button) - Sound Effect (HD).mp3');
    audio.volume = 0.2;
    audio.play();
    setTimeout(function() {
        miImg.classList.remove('shake'); // Elimina la clase después de un tiempo para detener la animación
    }, 500); // Tiempo de duración de la animación (en milisegundos)
  }