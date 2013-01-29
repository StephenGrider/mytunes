var PlaylistView = Backbone.View.extend({
  initialize: function(){    
    this.collection.on('change', this.render, this);
  },
  el:'',
  template: _.template('<h3>Play List:</h3><ul><% _.each(songs, function(element, index, list) { %> \
      <li><% print (element.attributes.title); %> </li>\
      <% }); %>\
    </ul>'),

  render: function(){
    this.$el.html(this.template({songs:this.collection.queued()}));
    return this.$el;
  }
});

