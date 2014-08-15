var vid;
window.onload = function() {
    //link variable to video
    console.log('loaded');

    vid = document.querySelector('#vid');





};

function clicked(){
    //preperty of HTML5 video
    //currentTime - current play time in seconds.
    vid.currentTime += 2;
}

function pauseToggle(){
    if(vid.paused){
        vid.play();
    } else {
        vid.pause();
    }

}