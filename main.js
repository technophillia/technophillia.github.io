
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
    function Check_next(i) {
			console.log(i)
				$('#slider').fadeOut(10);
			if(i === 0){

  	   document.getElementsByClassName('bigimgs')[0].src = "images/ghost.png"

			 }
			if (i === 1 ){

				document.getElementsByClassName('bigimgs')[0].src = "images/fifa m8.png"

			}
			$('#slider').fadeIn(1000);
  	}

  	setInterval(function () {
			if (document.getElementsByClassName('bigimgs')[0].src ===  "https://technophillia.github.io/images/ghost.png"){
  	    Check_next(1)
				}
			else if (document.getElementsByClassName('bigimgs')[0].src ===  "https://technophillia.github.io/images/fifa%20m8.png"){
				Check_next(0)
			}
  	}, 3000)
