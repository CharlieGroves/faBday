function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function pauseFireworks() {
  var a = document.getElementById('1');
  var b = document.getElementById('2');
  var c = document.getElementById('3');
  a.classList.add('paused');
  b.classList.add('paused');
  c.classList.add('paused');
}

function resumeFireworks() {
  var a = document.getElementById('1');
  var b = document.getElementById('2');
  var c = document.getElementById('3');
  a.classList.remove('paused');
  b.classList.remove('paused');
  c.classList.remove('paused');
}

function loadPhoto() {
  window.location = './photo.html'
}