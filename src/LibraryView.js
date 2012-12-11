var LibraryView = Backbone.View.extend({
  tagName: "table",
  initialize: function(){
    this.subviews = this.collection.map(function(song){
      return new LibraryEntryView({model: song});
    });
  },
  render: function(){
    var that = this;
    that.$el.html("<h2>Library</h2>")
    _.each(this.subviews, function(subview){
      that.$el.append(subview.render());
    })
    return this.$el;
  }
});

