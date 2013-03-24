var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
    params.library.on('audioEnded', function(song) {
      // unset 'currentSong' if no more q'd songs
      // else set to next q'd song
      // this.unset('currentSong')
      // unset song.'queuedAt'
    }, this);
  }

});
