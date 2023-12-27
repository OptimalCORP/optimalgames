document.querySelectorAll('.myImg').forEach(img => {
 img.onclick = function() {
    window.open(img.src);
 }
});
