var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
/* start solution */
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
/* end solution */
  }

});
