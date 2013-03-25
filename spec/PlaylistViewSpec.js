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
    view = new PlaylistView({collection: fakeSongs});
    view.render();
  });

  xit('should tell the user to click on some songs in the library', function(){
    expect(view.$el.html()).toMatch(/click on something/);
  });

  describe('when a song has "queuedAt" added or removed', function(){

    xit('should be rerendered', function(){
      var oldCallCount = view.render.callCount;
      firstFakeSong.set('queuedAt', new Date());
      expect(view.render.callCount).toEqual(oldCallCount + 1);
    });

    xit('should have the updated item in its collection', function(){
      expect(view.queuedSongs()).toEqual([]);
      firstFakeSong.set('queuedAt', new Date());
      expect(view.queuedSongs()).toEqual([firstFakeSong]);
    });

    xit('should have the updated item in its html', function(){
      firstFakeSong.set('queuedAt', new Date());
      expect(view.$el.html()).not.toMatch(/click on something/);
    });

  });

  xit('returns the queued songs in the order they were added', function(){
    expect(view.queuedSongs()).toEqual([]);
    firstFakeSong.set('queuedAt', new Date());
    expect(view.queuedSongs()).toEqual([firstFakeSong]);
    secondFakeSong.set('queuedAt', new Date());
    expect(view.queuedSongs()).toEqual([firstFakeSong, secondFakeSong]);
  });

});
