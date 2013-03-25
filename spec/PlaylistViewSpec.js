describe('PlaylistView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new Playlist([
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

  });

  it('creates PlaylistEntryViews for each queued song & renders them', function(){
    spyOn(PlaylistEntryView.prototype, 'render').andCallThrough();
    view = new PlaylistView({collection: fakeSongs});
    view.render();
    expect(PlaylistEntryView.prototype.render).toHaveBeenCalled();
  });

  it('renders when add or remove event fires from the playlist collection', function(){
    spyOn(PlaylistView.prototype, 'render').andCallThrough();
    view = new PlaylistView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render.callCount).toEqual(2);
  });

});
