// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.model.on('play', function(song){
    //   this.set('currentSong', song);
    // }, this);
    this.on('add',function(song){
      if(this.length ===1){
        this.playFirst(song);
      }

    })
  },

  playFirst: function(song){
    song.play();
  }



});
