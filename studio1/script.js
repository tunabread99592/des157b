(function(){

    'use strict';
    console.log('running js');

    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');
    const playToggle = document.querySelector('.fa-play');
    const volToggle = document.querySelector('.fa-volume-up');
    const volLevel = document.querySelector('#volumeLevel');
    let playing = false;

    const button = document.querySelectorAll('a');
    const main = document.querySelector('main');

    const poem = {
        start: [0,5,8,11,14.5,18],
        stop: [5,8,11,14.5,18,20]
    }

    function checkTime() {

        const time = myVideo.currentTime;
        console.log('highlight');
        
        button.forEach(function(btn) {
            btn.classList.remove('active');
        });
        
        for (let i = 0; i < poem.start.length; i++){
            if (time >= poem.start[i] && time <= poem.stop[i]) {
                button[i].classList.add('active');
            }
        }
    }

    myVideo.addEventListener('timeupdate', checkTime);

    button.forEach(function (btn, i){
        btn.addEventListener('click', function(e){
            e.preventDefault();

            myVideo.currentTime = poem.start[i];
            myVideo.play();

            const p = document.createElement('p');
            p.textContent = "it's just another";
            main.appendChild(p);

            console.log('add');
        });
    });


    fs.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    playToggle.addEventListener('click', function(){
        if (!playing) {
            myVideo.play ();
            playToggle.className = 'fa-solid fa-pause';
            playing = true;
        } else {
            myVideo.pause();
            playToggle.className = 'fa-solid fa-play';
            playing = false;
        }
    });

    volToggle.addEventListener('click', function(){
        if (volToggle.className === 'fas fa-volume-up') {
            volToggle.className = 'fas fa-volume-mute';
            myVideo.muted = true;
        } else {
            volToggle.className = 'fas fa-volume-up';
            myVideo.muted = false;
        }
    });

    volLevel.addEventListener('change', function(){
        changeVolume(volLevel.value);
    })

    function changeVolume(value) {
        myVideo.volume = value / 100;
        console.log('volume is' + myVideo.volume);
    }

})();