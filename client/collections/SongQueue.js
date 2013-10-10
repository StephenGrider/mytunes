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
    this.on('songended',function(){
      console.log('its nothing',this.models[0])
      this.remove(this.models[0]);
      this.trigger('remove')
      console.log('songqueue remove listener');
    })
  },

  playFirst: function(song){
    song.play();
  }



});
