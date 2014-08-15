window.onload = function() {
	//if initializeDefaultPlugins return false, we cannon play sound in the browser.
    //return will stop the init function.
    if(!createjs.Sound.initializeDefaultPlugins()) {return;}

    //SoundJS has included hte ability to internally per audio
    //Internal perloading requires each sound to be "registered" with soundJS.
    //and it will immediately be preloaded for use
    //SoundJS will only preload audio that is supported, so if multiple formats are provided,
    // only the one that the browser can play will be preloaded.

    //Browsers with MP3 support will load "music.mp3"
    //Firefox and Opera will load "music.ogg"

    createjs.Sound.registerSound({id:"soundId", src:"audio/music.mp3|audio/music.ogg"});

    //Listen for the fileload or loadcomplete
    createjs.Sound.addEventListener("fileload", handleFileLoad);

    function handleFileLoad(event){
        //a sound has preloaded
        //console.log will have HTTPRequest error, because not hosted;
        console.log('preloaded:', event.src);
        createjs.Sound.play(event.src);
    }
				
							


};
