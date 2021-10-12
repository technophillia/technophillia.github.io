
function getEed(){
	setTimeout(function(getEed){ alert("Use fullscreen for the best experience"); }, 100);
}
function closeWindow(){
}
    var elem = document.getElementById("maxwindow");
    var elem = document.documentElement;

    /* View in fullscreen */
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
