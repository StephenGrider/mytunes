describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new Song({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    spyOn(Song.prototype, 'enqueue');
    spyOn(Song.prototype, 'play');
    view = new LibraryEntryView({model: model});
    view.render();
  });

  xit('plays clicked songs', function(){
    view.$el.children().first().click();
    expect(model.play).toHaveBeenCalled();
  });

  // Comment out the above spec when implementing the below
  it('queues clicked songs', function(){
    view.$el.children().first().click();
    expect(model.enqueue).toHaveBeenCalled();
  });
});
