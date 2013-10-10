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



      // songQueue is set to a new queue.
      this.get('songQueue').add(song);

      // console.log(self.get('songQueue').length);

      // if (this.get('songQueue').length === 1) {
      //   this.set('currentSong', song);
      //   // this.get('songQueue').playFirst();
      // }


    }, this);

    // Set up song queue?
    // params.library.on('queue')
  },

});
