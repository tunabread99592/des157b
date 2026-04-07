(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');

    const person = banner.querySelector('#person');
    const speech = banner.querySelector('#speech');

    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            person.className = 'switch';
            button.className = 'switch';

            for (const section of sections) {
                section.className = 'switch';
            }

            person.innerHTML = `
            <img id="armTop" src="images/armTop.png" width="1200">
            <img id="torso" src="images/torso.png" width="250">
            <img id="armLeft" src="images/armLeft.png" width="90">
            <img id="handLeft" src="images/handLeft.png" width="200">
            <img id="handRight" src="images/handRight.png" width="200">
            <img id="legBack" src="images/legBack.png" width="1200">
            <img id="legFront" src="images/legFront.png" width="1200">
            <img id="head" src="images/head.png" width="200">`;

            speech.textContent = 'Make me small!'
        
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            person.removeAttribute('class');
            button.removeAttribute('class');

            for (const section of sections) {
                section.removeAttribute('class');
            }

            person.innerHTML = `
            <img id="mini" src="images/miniMe.png" alt="small" width="50">
            <img id="shadow" src="images/shadow.png" alt="shadow" width="50">`;

            speech.textContent = 'Make me big!'

            mode = 'dark'

        }
    })

})()