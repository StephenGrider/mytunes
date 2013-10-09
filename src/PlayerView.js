// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
