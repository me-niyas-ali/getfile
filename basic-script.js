if (Hls.isSupported()) {
    var video = document.getElementById('live-stream');
    var hls = new Hls();
    hls.loadSource('https://iplstream.noon.com/hls/live/2098770/NOON/7607/89752/master.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
     video.play();
    });
   }
