const element = document.querySelector('.pane');
const tiltDeg = 15;

element.addEventListener('mousemove', ({
  clientX,
  clientY
}) => {
  const bcr = element.getBoundingClientRect();
  const rotX = ((clientY - bcr.top) / bcr.height * 2 - 1) * tiltDeg;
  const rotY = ((clientX - bcr.left) / bcr.width * 2 - 1) * -tiltDeg;
  element.firstElementChild.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});
element.addEventListener('mouseleave', () => {
  element.firstElementChild.style.transform = `rotateX(0deg) rotateY(0deg)`;
});