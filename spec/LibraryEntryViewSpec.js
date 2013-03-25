describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new Song({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    spyOn(Song.prototype, 'enqueue');
    view = new LibraryEntryView({model: model});
    view.render();
  });

  it('queues clicked songs', function(){
    view.$el.children().first().click();
    expect(model.enqueue).toHaveBeenCalled();
  });
});
