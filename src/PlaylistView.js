var PlaylistView = Backbone.View.extend({

    renderCallCount: 0,

    initialize: function() {
      this.collection.on('change:queuedAt', this.render, this);
      // TDOD: addEventListener to handle audioEnded
      // this.collection.on('change:audioEnded', this.render, this);
      this.$el.html(['click on something']);
    },

    render: function() {
      this.renderCallCount++;
      if(this.renderCallCount > 1 )this.el.innerHTML = 'Now playing a song!';
      return this;
    },

    queuedSongs: function() {
      return this.collection.chain()
        .filter(function(val) {
          if(val.get('queuedAt')) return val;
        })
        .sortBy('queuedAt').value();
    }
});
