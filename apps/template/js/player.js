function Player() {

}

Player.prototype = {
  init: function() {
    this._player = document.getElementById('player-audio');
    this._play = document.getElementById('btn-play');
    this._pause = document.getElementById('btn-pause');

    this._player.mozAudioChannelType = 'content';
    this._play.addEventListener('click', this.do_play.bind(this));
    this._pause.addEventListener('click', this.do_pause.bind(this));
  },

  do_play: function() {
    this._player.play();
  },

  do_pause: function() {
    this._player.pause();
  }
};


var player = new Player();
window.addEventListener('load', function() {
  player.init();
});
