var Songs = Backbone.Collection.extend({
  queued: function(){
    return this.chain().filter(function(song){
      return !!song.attributes.queuedAt;
    }).sortBy(function(song){
      return song.attributes.queuedAt;
    }).value();
  }
});
