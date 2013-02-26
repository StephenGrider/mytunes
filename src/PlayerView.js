var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  setSong: function(song){
debugger;
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
