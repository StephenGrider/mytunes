var LibraryEntryView = Backbone.View.extend({

  tagName: "tr",

  events: {
    "click": "addToQueue"
  },

  render: function(){
    var htmlString = 
      "<td>" +
        "(" + this.model.attributes.artist + ")" + 
      "</td>" +
      "<td>" + 
        this.model.attributes.title + 
      "</td>";
    return this.$el.html(htmlString);
  },

  // event listener
  addToQueue: function(){
    this.model.set("queuedAt", new Date());
  }

});

