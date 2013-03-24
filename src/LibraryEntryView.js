var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('\
    <td>(<%= artist %>)</td>\
    <td><a href="#<%= url %>" class="queue"><%= title %></a></td>\
  '),

  events: {
    'click .queue': function() {
      this.model.queue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
