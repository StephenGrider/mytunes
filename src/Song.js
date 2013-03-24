var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  queue: function() {
    this.set('queuedAt', new Date());
  }

});
