var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}

document.getElementById('blue-button').addEventListener('click', function() {
  this.style.animation = 'button-animation 0.3s forwards';
 });

