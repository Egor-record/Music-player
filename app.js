var playlist = new Playlist();

var hereComesTheSun = new Song("Backerman", "Bulich", "3:50");
var walkingOnSunshine = new Song("Walking on the sun", "Blues", "2:44");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}