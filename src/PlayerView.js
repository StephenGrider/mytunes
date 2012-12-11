var PlayerView = Backbone.View.extend({
  initialize: function(){
    // set up a listener on the songs collection
    this.collection.bind("change", this.handleQueueChange.bind(this));
  },
  template: _.template('<audio src="<%= url %>" controls autoplay></audio>'),
  render: function(){
    if(this.model){
      this.$el.html(this.template(this.model.attributes));
    }
    return this.$el;
  },
  handleQueueChange: function(){
    if(!this.model){
      this.model = this.collection.queued()[0]
      this.render();
    }
  }
});

