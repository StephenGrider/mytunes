var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('audioEnded', this);
  },

  queue: function() {
    this.set('queuedAt', new Date());
  }

});
