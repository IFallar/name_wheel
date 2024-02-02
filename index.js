const messages = [
  `There's so much I want to say to you... <br><br> 
  I honestly don't even know where to begin. <br><br>   
  What's left to say anyway? <br><br> 
  Other than that I still love you. <br><br> 

  I've been writing a lot y'know, too much. So here: <br><br> 

  <a href="https://drive.google.com/drive/folders/1NuH01VepoiQqrlpfro-0YfvvJ3ZYry5Y?usp=sharing">The sum of my thoughts</a>  <br><br> 

  If nothing else, I want to see you again in person.
  `, //CRISTINE 0 

  `
  It was a quiet realization, <br><br> 
  you were scolding me then. <br><br> 
  But as you did, your words faded <br><br> 
  i didn't know it what it was back then <br><br> 
  but in that moment <br><br> 
  i felt the afternoon sun, <br><br> 
  and I thought to myself; <br><br> 
  “Huh. It's a bit warmer <br><br> 
  than I would have guessed.” <br><br> 
  `, //MARIANNE 1

  `
  Goodluck on the Interview!
  `,//MART 2 

  `
  When are we playing PZ?
  `,//LUKE 3

  `
  Don't die on the Job
  `,//RJ 4

  `
  Go outside man...
  `,//JOSEPH 5

  `
  Goodluck sa lovelife mydude.
  `,//EMMAN 6

  `
  Thanks for the Pares.
  `,//LEMUEL 7

  `
  Gray, when are gonna go on the drink?
  `,//GRAY 8

  `
  Next time don't hide when you're having an attack.
  `,//TRISHA 9

  `
  Teach me how to lose weight bossman.
  `,//MATTHEW 10

  `
  Can I get 1700 too?
  `,//JUSTIN 11

  `
  Man, I only just found out you were way older than us fr fr.
  `,//RELIX 12

  `
  Sino ba yang ex na yan.
  `,//RAFAEL 13
  

  `<img id="message_img" class="unselectable" src="images/ltg.jpg" alt="">`//ELSE
];

const passname = document.getElementById("person");
const messagecon = document.getElementById("message_container");

const letter_circle = document.getElementById("ltr_circ");
const message_circle = document.getElementById("messagecircle");
const arrow = document.getElementById("arrow");

var barleft = document.getElementsByClassName("leftbars");
var barright = document.getElementsByClassName("rightbars");

let currentname = "";

document.addEventListener('DOMContentLoaded', () => {

    const ltrCon = document.getElementById('ltr_con');
    let isDragging = false;
    let initialRotation;
    let currentRotation;
    let animationFrameId;

    ltrCon.addEventListener('mousedown', (event) => {

        cancelAnimationFrame(animationFrameId);
        isDragging = true;

        const rect = ltrCon.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);

        initialRotation = (angle * 180) / Math.PI;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {

            const rect = ltrCon.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);

            currentRotation = (angle * 180) / Math.PI - initialRotation;
            ltrCon.style.transition = 'transform 0s'; 
            ltrCon.style.transform = `rotate(${currentRotation}deg)`;


        }
    });

    document.addEventListener('mouseup', () => {

        if (isDragging) {
            isDragging = false;
            ltrCon.style.transition = 'transform 0.3s ease-out'; 
            snapToNearestInterval();

            setTimeout(() => {
                ltrCon.style.transition = 'transform 0s'; 
                animateRotationDecay();
            }, 500); 
        }

    });

    function playRotateSound() {
      var audio = document.getElementById('rotateSound');
      if (audio) {
          audio.currentTime = 0;
          audio.play();
      }
    }

    function snapToNearestInterval() {

        const interval = 13.84615384615385;
        const nearestInterval = Math.round(currentRotation / interval) * interval;
        ltrCon.style.transform = `rotate(${nearestInterval}deg)`;

        currentRotation = nearestInterval;

        let newletter = toLetter(currentRotation);
        playRotateSound();
        writename(newletter);

        finalize();

    }

    function animateRotationDecay() {

        const decayRate = .80; 
        const duration = 20; 

        function animate() {

            currentRotation *= decayRate;
            ltrCon.style.transform = `rotate(${currentRotation}deg)`;

            if (Math.abs(currentRotation) > 0.1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                ltrCon.style.transform = 'rotate(0deg)'; // Ensure it reaches exactly 0 degrees
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }
});

function toLetter(angle){
        
    if (angle === 0) {
        return 'A';
      } else if (angle <= -13 && angle >= -14) {
        return 'B';
      } else if (angle <= -27 && angle >= -28 || angle >= 328 && angle <= 333) {
        return 'C';
      } else if (angle <= -41 && angle >= -42 || angle >= 314 && angle <= 321) {
        return 'D';
      } else if (angle <= -55 && angle >= -56 || angle >= 300 && angle <= 307) {
        return 'E';
      } else if (angle <= -69 && angle >= -70 || angle >= 285 && angle <= 293) {
        return 'F';
      } else if (angle <= -83 && angle >= -84 || angle >= 275 && angle <= 278) {
        return 'G';
      } else if (angle <= -96 && angle >= -97 || angle >= 260 && angle <= 265) {
        return 'H';
      } else if (angle <= -110 && angle >= -111 || angle >= 248 && angle <= 257) {
        return 'I';
      } else if (angle <= -124 && angle >= -125 || angle >= 230 && angle <= 238) {
        return 'J';
      } else if (angle <= -138 && angle >= -139 || angle >= 218 && angle <= 225) {
        return 'K';
      } else if (angle <= -152 && angle >= -153 || angle >= 205 && angle <= 210) {
        return 'L';
      } else if (angle <= -166 && angle >= -167 || angle >= 190 && angle <= 198) {
        return 'M';
      } else if (angle >= 180 && angle <= 181 || angle <= -180 && angle >= -185) {
        return 'N';
      } else if (angle >= 166 && angle <= 167 || angle <= -190 && angle >= -198) {
        return 'O';
      } else if (angle >= 152 && angle <= 153 || angle <= -205 && angle >= -210) {
        return 'P';
      } else if (angle >= 138 && angle <= 139 || angle <= -218 && angle >= -225) {
        return 'Q';
      } else if (angle >= 124 && angle <= 125 || angle <= -230 && angle >= -238) {
        return 'R';
      } else if (angle >= 110 && angle <= 111 || angle <= -248 && angle >= -257) {
        return 'S';
      } else if (angle >= 96 && angle <= 97 || angle <= -260 && angle >= -265) {
        return 'T';
      } else if (angle >= 83 && angle <= 84 || angle <= -276 && angle >= -280) {
        return 'U';
      } else if (angle >= 69 && angle <= 70 || angle <= -288 && angle >= -293) {
        return 'V';
      } else if (angle >= 55 && angle <= 56 || angle <= -300 && angle >= -307) {
        return 'W';
      } else if (angle >= 41 && angle <= 42 || angle <= -317 && angle >= -325) {
        return 'X';
      } else if (angle >= 27 && angle <= 28) {
        return 'Y';
      } else if (angle >= 13 && angle <= 14) {
        return 'Z';
      } else {
        return '';
      }

    };

function writename(newletter){

    passname.textContent = passname.textContent + newletter

};

function messagedisplay(currentname){

    switch(currentname){
        case "CRISTINE":
            x = 0;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "MARIANNE":
            x = 1;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "MART":
            x = 2;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "LUKE":
            x = 3;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "RJ":
            x = 4;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "JOSEPH":
            x = 5;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "EMMAN":
            x = 6;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "LEMUEL":
            x = 7;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "GRAY":
            x = 8;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "TRISHA":
            x = 9;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "MATTHEW":
            x = 10;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "JUSTIN":
            x = 11;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "RELIX":
            x = 12;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        case "RAFAEL":
            x = 12;
            openbars()
            messagecon.innerHTML = `<h3 id="message"> ${messages[x]} </h3>`;
            break;
        
    }

};

function finalize(){
    let currentname = passname.textContent
    setTimeout(() => {
        messagedisplay(currentname);
    }, 1000); 

}

function openbars(){

    for(var i = 0; i < barleft.length; ++i){
        barleft[i].style.marginLeft = "100%";
      }

      for(var i = 0; i < barright.length; ++i){
        barright[i].style.width = "0%";
      }    
      
      letter_circle.style.height = "970px"
      letter_circle.style.width = "970px"

      message_circle.style.height = "630px"
      message_circle.style.width = "630px"

      arrow.style.display = "none";

      passname.textContent = "";
      passname.style.display = "none";

}