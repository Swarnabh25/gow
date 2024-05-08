let axe = document.getElementById('axe');
let isDragging = false;
let initialX = 0;
let initialY = 0;
let offsetX = 0;
let offsetY = 0;
let originalAngle = Math.PI / 2; // Initial rotation angle (90 degrees)
let rotationAngle = originalAngle; // Current rotation angle
let rotationSpeed = 0.1; // Adjust rotation speed

axe.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', endDrag);

function startDrag(e) {
  isDragging = true;
  initialX = e.clientX - offsetX;
  initialY = e.clientY - offsetY;
}

function endDrag() {
  isDragging = false;
}

document.addEventListener('mousemove', drag);

function drag(e) {
  if (isDragging) {
    offsetX = e.clientX - initialX;
    offsetY = e.clientY - initialY;
    let newX = e.clientX - axe.clientWidth / 2;
    let newY = e.clientY - axe.clientHeight / 2;
    axe.style.left = newX + 'px';
    axe.style.top = newY + 'px';
    // Continuous rotation with increased speed
    rotationAngle += rotationSpeed; // Adjust rotation speed as needed
    axe.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}rad)`;
  }
}

function resetAxe() {
  axe.style.left = '50%';
  axe.style.top = '50%';
  rotationAngle = 90; // Reset rotation angle to original angle
  axe.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}rad)`;
}
