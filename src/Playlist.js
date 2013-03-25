var Playlist = Songs.extend({

  initialize: function(){
/* start solution */
    this.on('add', function(song){
      this.length === 1 && this.playFirst();
    });

    this.on('ended', function(){
      this.shift();
      this.length && this.playFirst();
    });

    this.on('dequeue', function(song){
      this.remove(song);
    })
  },

  playFirst: function(){
    this.at(0).play();
/* end solution */
  }

});
