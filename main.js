
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
    function Check_next() {
  	    var wanted = document.getElementsByName("slide"); /* "wanted" is an array from this point */
  	    for (var i = 0; i < wanted.length; ++i) {
  	        if (wanted[i].checked == true) {
  	            if (i == wanted.length - 1) /* If the last radio is selected */
  	            {
  	                document.getElementsByName("slide")[0].checked = true;
  	            } else {
  	                document.getElementsByName("slide")[i + 1].checked = true;
  	            }
  	            break;
  	        }
  	    }


  	}

  	setInterval(function () {
  	    Check_next()
  	}, 1000)
