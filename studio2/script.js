(function(){
    'use strict';
    console.log('running js');

    // const dots = ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight'];

    const dots = document.querySelectorAll('.dot');

    
    // async function getData(){
    //     const hours = await fetch('data.json');
    //     const data = await hours.json();
    //     console.log(data);

    //     data.forEach(function(point){
    //         if (dots) {
    //             dots.style.setProperty('--hours', point.hours);
    //         }
    //     });

    //     for (const point of data){
    //         console.log(point.hours);
    //     }
        
    // }

    // getData();



    async function getData(){
        const conditions = await fetch('data/condtions.json');
        const data = await conditions.json();
        console.log(data);
        document.querySelector('#condition').innerHTML = outputHTML1(data);
    }

    function outputHTML1(data){
        let html = '<p>'
        html += `${data}`;
        return html;
    }

    getData();


})();