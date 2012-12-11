var LibraryEntryView = Backbone.View.extend({

  tagName: "tr",

  events: {
    "click": "addToQueue"
  },

  // templates are a nicer way to put js data into html strings
  template: _.template("<td>(<%= artist %>)</td><td><%= title %></td>"),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  // event listener
  addToQueue: function(){
    this.model.set("queuedAt", new Date());
  }

});

