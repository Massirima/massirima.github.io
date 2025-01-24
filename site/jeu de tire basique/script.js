// selectionner les elements creer sur html 

let container = document.querySelector('.container');
let btn = document.querySelector('.start');
let pointscont = document.querySelector('.point');
let tempscont = document.querySelector('.temps');

btn.onclick = function(){
    let points = 0;
    let temps = 10;
    container.innerHTML = "";

    let interval = setInterval(function showtarget(){
        // creation de la cible
        let target = document.createElement('img');
        target.id="target";
        target.src="cible.png";
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';
        

        //faire disparaitre la cible
        setTimeout(function(){
            target.remove();
        }, 2000)

        //quand on clique sur la cible 
        target.onclick = function(){
            points += 1 ;
            target.style.display = 'none';
        }
        temps -= 1 ;
   
        //afficher les infos
        pointscont.innerHTML = `Score : ${points}`
        tempscont.innerHTML = `Temps : ${temps}`

        //fin du jeu quand le temps atteint 0
        if(temps == 0){
            clearInterval(interval);
            container.innerHTML = 'fin du jeu' ;
            container.style.color = 'white';
        }
    }, 1000);

;}