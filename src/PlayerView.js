var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', function() {
      this.model.trigger('audioEnded', this.model);
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
