var PlaylistView = Backbone.View.extend({

/* start solution */
  tagName: "table",
/* end solution */

  initialize: function() {
/* start solution */
    this.collection.on('add remove', this.render, this);
/* end solution */
  },

  render: function() {
/* start solution */
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
/* end solution */
    return this.$el;
  }

});
