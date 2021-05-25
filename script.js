window.onerror = function(msg, url, linenumber) {
  alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
  return true;
}
function status() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var x = JSON.parse(xhttp.responseText);
    // alert(x.status)
    if(x.status == 'online') {
      document.getElementById("online").style.background = "#4caf50";
      changeFavicon('https://i.ibb.co/R3F83bX/77016441-s-460-u-7364273ea45ebd33bb2edecb8605d732850ec904-v-4.png')
    }
    else {
      document.getElementById("online").style.background = "#aaa";
      changeFavicon('https://i.ibb.co/gSTbvX7/77016441-s-460-u-7364273ea45ebd33bb2edecb8605d732850ec904-v-4-1.png')
    }
    document.getElementById("loader").style.display = 'none'
  }
};
xhttp.open("GET", "online.json", true);
xhttp.send();
}
status();
$(document).ready(function() {
  setInterval(status, 10000);
});
document.head = document.head || document.getElementsByTagName('head')[0];
  function changeFavicon(src) {
  var link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
  }
  var cbox = document.getElementById('dmode');
  var theme = 'light';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  switch(theme) {
    case 'dark': 
      cbox.checked = true;
      document.documentElement.setAttribute('data-theme', 'dark');
      break;
    case 'light': 
      cbox.checked = false;
      document.documentElement.setAttribute('data-theme', 'light');
      break;
  }
function switch_theme() {
    if(cbox.checked == true) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
$('.tooltipped').tooltip();
document.getElementById('year').innerHTML = new Date().getFullYear()