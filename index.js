const passname = document.getElementById("person");


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

    function snapToNearestInterval() {

        const interval = 13.84615384615385;
        const nearestInterval = Math.round(currentRotation / interval) * interval;
        ltrCon.style.transform = `rotate(${nearestInterval}deg)`;

        currentRotation = nearestInterval;

        let newletter = toLetter(currentRotation);
        writename(newletter);

    }

    function animateRotationDecay() {

        const decayRate = 0.95; 
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
      } else if (angle <= -27 && angle >= -28) {
        return 'C';
      } else if (angle <= -41 && angle >= -42) {
        return 'D';
      } else if (angle <= -55 && angle >= -56) {
        return 'E';
      } else if (angle <= -69 && angle >= -70) {
        return 'F';
      } else if (angle <= -83 && angle >= -84) {
        return 'G';
      } else if (angle <= -96 && angle >= -97) {
        return 'H';
      } else if (angle <= -110 && angle >= -111) {
        return 'I';
      } else if (angle <= -124 && angle >= -125) {
        return 'J';
      } else if (angle <= -138 && angle >= -139) {
        return 'K';
      } else if (angle <= -152 && angle >= -153) {
        return 'L';
      } else if (angle <= -166 && angle >= -167) {
        return 'M';
      } else if (angle >= 180 && angle <= 181) {
        return 'N';
      } else if (angle >= 166 && angle <= 167) {
        return 'O';
      } else if (angle >= 152 && angle <= 153) {
        return 'P';
      } else if (angle >= 138 && angle <= 139) {
        return 'Q';
      } else if (angle >= 124 && angle <= 125) {
        return 'R';
      } else if (angle >= 110 && angle <= 111) {
        return 'S';
      } else if (angle >= 96 && angle <= 97) {
        return 'T';
      } else if (angle >= 83 && angle <= 84) {
        return 'U';
      } else if (angle >= 69 && angle <= 70) {
        return 'V';
      } else if (angle >= 55 && angle <= 56) {
        return 'W';
      } else if (angle >= 41 && angle <= 42) {
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

}