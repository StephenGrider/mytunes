var Songs = Backbone.Collection.extend({
  // return queued songs
  queued: function(){
    // chain, filter, sortBy, and value are from underscore
    return this.chain().filter(function(song){
      return !!song.attributes.queuedAt;
    }).sortBy(function(song){
      return song.attributes.queuedAt;
    }).value();
  }
});
