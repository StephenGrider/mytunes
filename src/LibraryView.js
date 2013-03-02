var LibraryView = Backbone.View.extend({

  tagName: "table",

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        console.log('LibView song: ', song);
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
