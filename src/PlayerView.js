var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
/* start solution */
    var self = this;
    this.$el.on('ended', function() {
      self.model.trigger('ended');
    });
/* end solution */
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
