var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay muted />',

  initialize: function() {
    var self = this;
    this.$el.on('ended', function() {
      console.log('song ended!');
      self.model.ended();
    });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
