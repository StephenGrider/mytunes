var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  // templates are a nicer way to put js data into html strings
  template: _.template(
    '<td>(<%= artist %>)</td>' +
    '<td>' +
      '<a href="#<%= url %>" class="play"><%= title %></a>' +
    '</td>'
  ),

  events: {
    'click .play': 'play'
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  play: function() {
    this.model.collection.trigger('play', this.model);
  }

});

