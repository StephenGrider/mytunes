describe('PlaylistView', function() {
  var view, firstFakeSong, fakeSongs, secondFakeSong;

  beforeEach(function() {
    fakeSongs = new Songs([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);

    firstFakeSong = fakeSongs.at(0);
    secondFakeSong = fakeSongs.at(1);

    spyOn(PlaylistView.prototype, 'render').andCallThrough();
    spyOn(PlaylistView.$el.children(), 'detach').andCallThrough();
    spyOn(PlaylistEntryView.prototype, 'render').andCallThrough();
    view = new PlaylistView({collection: fakeSongs});
    view.render();
  });

  it('creates PlaylistEntryViews for each queued song & renders them', function(){
    expect(PlaylistEntryView.prototype.render).toHaveBeenCalled();
  });

  it('', function(){
    expect(PlaylistView.$el.children().detach).toHaveBeenCalled();
    expect();
  });

});
