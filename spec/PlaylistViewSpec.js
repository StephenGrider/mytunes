describe("PlaylistView", function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new Songs();
    fakeSongs.reset([
      {
        fake: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      }
    ]);

    spyOn(PlaylistView.prototype, 'render').andCallThrough();
    view = new PlaylistView({collection: fakeSongs});
    view.render();
  });

  xit("should tell the user to click on some songs in the library", function(){
    expect(view.$el.html()).toMatch(/click on something/);
  });

  describe("when a song has 'queuedAt' added or removed", function(){

    xit("should be rerendered", function(){
      var oldCallCount = view.render.callCount;
      var song = fakeSongs.models[0];
      song.set("queuedAt", new Date());
      expect(view.render.callCount).toEqual(oldCallCount + 1);
    });

    xit("should have the updated item in its collection", function(){
      expect(view.queuedSongs.length).toEqual(0);
      var song = fakeSongs.models[0];
      song.set("queuedAt", new Date());
      expect(view.queuedSongs[0]).toEqual(song);
    });

    xit("should have the updated item in its html", function(){
      var song = fakeSongs.models[0];
      song.set("queuedAt", new Date());
      expect(view.$el.html()).not.toMatch(/click on something/);
    });

  });
});