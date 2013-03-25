var AppView = Backbone.View.extend({

  libraryCollection: this.model.get('library'),

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.playlistView = new PlaylistView({collection: this.libraryCollection});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.libraryCollection.on('change:queuedAt', function(song){
      if(!this.playerView.el.duration){
        song.play();
      }
    }, this);

    this.libraryCollection.on('audioEnded', function(song){
      song.unset('queuedAt');
      var queuedSongs = this.playlistView.queuedSongs();
      if(queuedSongs.length){
        this.model.set('currentSong', queuedSongs[0]);
        this.playerView.setSong(this.model.get('currentSong'));
      }
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.playlistView.$el,
      new LibraryView({collection: this.libraryCollection}).render()
    ]);
  }

});
