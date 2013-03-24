var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.playlistView = new PlaylistView({collection: this.model.get('library')});
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    this.playlistView.collection.on('change:audioEnded', function(song){
      debugger;
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
      new LibraryView({collection: this.model.get('library')}).render()
    ]);
  }

});
