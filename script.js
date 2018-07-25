var ice = document.getElementById('ice');
var ice = ice.getContext('2d');

// box
ice.beginPath();
ice.moveTo(0, 0);
ice.lineTo(400, 0);
ice.lineTo(400, 400);
ice.lineTo(0, 400);
ice.stroke();

// triangle
ice.beginPath();
ice.moveTo(100, 100); // start at top left corner of canvas
ice.lineTo(200, 100); // go 200px to right (x), straight line from 0 to 0
ice.lineTo(150, 250); // go to horizontal 100 (x) and vertical 200 (y)
ice.fillStyle = '#AA6522';
ice.fill(); // connect and fill

// arc
ice.beginPath();
ice.lineWidth = '4';
ice.fillStyle = '#8A0908';
ice.moveTo(100, 100);
ice.quadraticCurveTo(150, -15, 200, 100);
ice.fill();
