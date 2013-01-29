var LibraryEntryView = Backbone.View.extend({

  tagName: "tr",

  events: {
    "click .queue": "addToQueue",
    "click .play": "play"
  },

  // templates are a nicer way to put js data into html strings
  template: _.template('<td>(<%= artist %>)</td><td><a href="#<%= title %>" class="play"><%= title %></a></td><td><a href="#" class="queue" >add to queue</a></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  play: function() {
    this.model.collection.trigger('play',this.model);
  },
  // event listener
  addToQueue: function(){
    this.model.set("queuedAt", new Date());
  }

});

