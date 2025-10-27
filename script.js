let etat = "off";

function lancer(){
    const musicPlayer = document.getElementById("musicPlayer");
    const playCheckbox = document.getElementById("playAnimation");
    const startButton = document.querySelector('.start-button');
    
    if(etat === "off"){
        // Démarrer la musique et l'animation
        musicPlayer.play();
        playCheckbox.checked = true;
        startButton.value = "⏸️ Pause";
        etat = "on";
    } else {
        // Arrêter la musique et l'animation
        musicPlayer.pause();
        playCheckbox.checked = false;
        startButton.value = "🎵 Lire les paroles";
        etat = "off";
    }
}


