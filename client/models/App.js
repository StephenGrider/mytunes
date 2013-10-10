// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({


// params is { library: [ {song obj} , {song obj}, {song obj}, {song obj} ] }
  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    var self = this;

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
    }, this);

    // this.on('songended',function(){
    //   this.get('songQueue').trigger('end');
    // },this);

  },

});
