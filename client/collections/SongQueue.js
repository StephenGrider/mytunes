// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    var self = this;

    this.on('add',function(song){
      if(this.length ===1){
        this.playFirst(song);
      }
      song.on('ended',function(){
        this.remove(this.models[0]);
        if(this.models[0]){
          this.playFirst(this.models[0]);
        }
      }.bind(this));

      song.on('clickremove',function(){
        self.remove(this);
        // if (self.models.length) {
        //   self.models[0].play();
        // }
        if(self.models[0]){
          self.playFirst(self.models[0]);
        }
      })
    }.bind(this));



  },

  playFirst: function(song){
    //if(song === undefined){
      song.play();
    // }
  }



});
