var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('\
    <td>(<%= artist %>)</td>\
    <td><a href="#<%= url %>" class="play"><%= title %></a></td>\
  '),

  events: {
    'click .play': function() {
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
