var PlaylistView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('change', this.render, this);
  },

  // todo: what?
  el: '',

  template: _.template(
    '<h3>Play List:</h3>' +
    '<ul>' +
      // todo: factor out this inline each
      '<% _.each(songTitles, function(songTitle) { %>' +
        '<li>' +
          // todo: will this work instead of print?
          '<%= songTitle %> ' +
        '</li>' +
      '<% }); %>' +
    '</ul>'
  ),

  render: function(){
    this.$el.html(this.template({
      songTitles: this.collection.queued().map(function(song){
        return song.attributes.title;
      })
    }));
    return this.$el;
  }
});

