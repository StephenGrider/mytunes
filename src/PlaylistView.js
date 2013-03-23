var PlaylistView = Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(['click on something']);
      return this;
    }
});
