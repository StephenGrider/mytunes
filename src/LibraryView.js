var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function(){
    this.subviews = this.collection.map(function(song){
      return new LibraryEntryView({model: song});
    });
  },

  render: function(){
    // render all the subviews and append them to this.$el
    return this.$el.html("<th>Library</th>").append(
      _(this.subviews).map(function(subview){
        return subview.render();
      })
    );
  }

});
