// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // What happens when you click or perform some other event on a queue entry? Delete it?
  // events: {

  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});


// // LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
// var LibraryEntryView = Backbone.View.extend({

//   tagName: 'tr',

//   template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

//   events: {
//     'click': function() {
//       this.model.play();
//     }
//   },

//   render: function(){
//     return this.$el.html(this.template(this.model.attributes));
//   }

// });
