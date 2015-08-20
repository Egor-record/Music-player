// создаем переменные 

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duraction = duration;
  this.isPlaying = false; // по умолчанию выключенно 
}

// включается 
Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

// записываем верстку через js 

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
  htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duraction;
  htmlString += '</span></li>'; 
    return htmlString;
};