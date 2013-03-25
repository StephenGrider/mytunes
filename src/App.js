var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('playlist', new Playlist());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

/* start solution */
    params.library.on('enqueue', function(song){
      this.get('playlist').add(song);
    }, this);
/* end solution */
  }

});
