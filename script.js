function allumerBougie() {
    let briquet = document.querySelector('.briquet');
    let flammeBriquet = document.querySelector('.flamme');
    let flammeBougie = document.querySelector('.bougie-flamme');
    let message = document.querySelector('.message-romantique');
    let instruction = document.querySelector('.instruction');

    // Cacher l'instruction
    instruction.style.display = 'none';

    // Déplacer le briquet vers la bougie
    briquet.style.transform = 'translate(200px, -100px)';

    setTimeout(() => {
        // Afficher la flamme du briquet
        flammeBriquet.style.display = 'block';

        setTimeout(() => {
            // Éteindre la flamme du briquet et allumer la bougie
            flammeBriquet.style.display = 'none';
            flammeBougie.style.display = 'block';

            // Afficher le message romantique
            message.style.display = 'block';
        }, 1000);
    }, 2000);
}
