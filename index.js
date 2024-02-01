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
            }, 1000); 
        }

    });

    function snapToNearestInterval() {

        const interval = 13.84615384615385;
        const nearestInterval = Math.round(currentRotation / interval) * interval;
        ltrCon.style.transform = `rotate(${nearestInterval}deg)`;

        currentRotation = nearestInterval;

        console.log(currentRotation)

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