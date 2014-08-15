window.onload = function () {
    if (!createjs.Sound.initializeDefaultPlugins()) {
        return;
    }

    var audio = "audio/";

    var manifest = [

        {id: "Music", src: audio + "music.mp3|"  +audio + "music.ogg"},
        {id: "Thunder", src: audio + "Thunder1.mp3|" +audio + "Thunder1.ogg"}
    ];

    createjs.Sound.registerManifest(manifest);
};

function handleLoad(event){
    createjs.Sound.play(event.src);

}

function playMusic(){
    createjs.Sound.play("Music");
}

function playThunder(){
    createjs.Sound.play("Thunder");
}

