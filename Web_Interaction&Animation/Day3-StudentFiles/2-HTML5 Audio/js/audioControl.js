var audio;
window.onload = function() {
		audio = document.querySelector('#audio');
		
};

function clicked(){
    audio.currentTime += 1;
}