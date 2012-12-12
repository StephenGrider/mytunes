var PlayerView = Backbone.View.extend({

  initialize: function(){
    // set up an event listener on the songs collection
    this.collection.bind("change", this.handleQueueChange, this);
  },

  // templates are a nicer way to put js data into html strings
  template: _.template('<audio src="<%= url %>" controls autoplay></audio>'),

  render: function(){
    if(this.model){
      this.$el.html(this.template(this.model.attributes));
    }
    return this.$el;
  },

  // event listener
  handleQueueChange: function(){
    if(!this.model){
      this.model = this.collection.queued()[0]
      this.render();
    }
  }

});

