describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new Backbone.Model({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
      enqueue: function() { console.log('song queued!');}
    });
    view = new LibraryEntryView({model: model});
    spyOn(view.model, 'enqueue').andCallFake();
    view.render();
  });

  it('should set the song model\'s "queuedAt" property when you click on it', function(){
    view.$el.children().first().click();
    expect(model.enqueue).toHaveBeenCalled();
  });
});
