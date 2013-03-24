var PlaylistView = Backbone.View.extend({

    initialize: function() {
      this.collection.on('change:queuedAt', this.render, this);
      this.render();
    },

    render: function() {
      if(this.queuedSongs().length){
        this.el.innerHTML = 'Now playing a song!';
      } else {
        this.el.innerHTML = 'click on something';
      }
      return this.$el;
    },

    queuedSongs: function() {
      return this.collection.chain()
        .filter(function(val) {
          if(val.get('queuedAt')) return val;
        })
        .sortBy('queuedAt')
        .value();
    }
});
