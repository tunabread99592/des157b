(function(){
    'use strict';
    console.log('running js');

    const timestamps = document.querySelector('#timestamps');
    const bees = document.querySelector('#bees');

    const condition = document.querySelector('#condition p')
    const feeling = document.querySelector('#feeling p')
    const reason = document.querySelector('#reason p')

    const nose = document.querySelector('#nose');

    let data = [];
    let currentIndex = 0;

    async function fetchdata(){
        const response = await fetch('./data.json');
        data = await response.json();

        createDots(data);
        addDotListeners();
        pointPosition(data);

        document.querySelector('.dot').classList.add('active');

        updateUI(0);
    }

    // functions------------------------------------------

    function createDots(data){
        timestamps.innerHTML = '';
    
        data.forEach(function(item,index){
            const div = document.createElement('div');
            div.className = 'dot';
            div.id = `dot-${index + 1}`;

            div.dataset.index = index;
            div.dataset.time = item.time;
            
            timestamps.appendChild(div);
        });
    }

    function addDotListeners(){
        const dots = document.querySelectorAll('.dot');

        dots.forEach(function(dot){
            dot.addEventListener('click', function(){
                const index = Number(this.dataset.index);


                const current = document.querySelector('.dot.active');
                if (current) {
                    current.classList.remove('active');
                }

                this.classList.add('active');
                
                updateUI(index);
            })
        })
    }

     function updateUI(index){
        currentIndex = index;

        condition.innerHTML = data[index].conditions;
        feeling.innerHTML = data[index].feelings;
        reason.innerHTML = data[index].reasons;

        renderBees(data[index].number);
        updateNose(data[index].number);
    }
    
    function renderBees(count){
        console.log('bees, please');
        bees.innerHTML = '';

        for(let i = 0 ; i < count ; i++){
            const img = document.createElement('img');
            img.src = 'images/bee.png';

            // img.style.border = '1px solid red';
            img.alt = 'bee';

            bees.appendChild(img);
        }
    }

    function updateNose(sneezes){
        if (sneezes <= 1){
            nose.src = 'images/nose1.png';
        }
        else if (sneezes <= 3){
            nose.src = 'images/nose2.png';
        }
        else {
            nose.src = 'images/nose3.png';
        }
    }

    fetchdata();


// timeline positioning------------------------


    function pointPosition(data){
        const dots = document.querySelectorAll('.dot');

        dots.forEach(function(dot, i){
            const hours = data[i].hours;

            const percent = (hours / 24) * 100;
            dot.style.left = percent + '%';
        })
    };

})();