// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  // initialize: function() {
  //   this.render();
  // },

  render: function() {

    this.$el.children().detach();

    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model:song}).render();
      }));
  }

});

// // LibraryView.js - Defines a backbone view class for the music library.
// var LibraryView = Backbone.View.extend({

//   tagName: "table",

//   render: function(){
//     // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
//     // see http://api.jquery.com/detach/
//     this.$el.children().detach();

//     return this.$el.html('<th>Library</th>').append(
//       this.collection.map(function(song){
//         return new LibraryEntryView({model: song}).render();
//       })
//     );
//   }

// });
