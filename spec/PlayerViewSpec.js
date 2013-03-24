describe('PlayerView', function() {
  var library, appView;

  beforeEach(function() {
    jasmine.Clock.useMock();

    library = new Songs([
      {
        url: "mp3s/08 4 Page Letter.mp3",
        title: "4 Page Letter",
        artist: "Aaliyah"
      },
      {
        url: "mp3s/11 We Need A Resolution.mp3",
        title: "We Need A Resolution",
        artist: "Aaliyah"
      }
    ]);
    // playerView is created in AppView initialize
    // access with appView.playerView
    appView = new AppView({model: new App({library: library})});
  });

  it('gets a new model when the first song is played', function(){
    expect(appView.playerView.model).not.toEqual(library.at(0));
    library.at(0).play();
    expect(appView.playerView.model).toEqual(library.at(0));
  });

  describe('Song transitions', function() {
    it('dequeues a song when finished playing', function(){
      library.at(0).play();
      var prevSong = appView.playerView.model;
      // Artificially end song
      var endSong = function() { appView.playerView.el.currentTime = appView.playerView.el.duration;};
      setTimeout(endSong, 500);
      jasmine.Clock.tick(501);
      expect(library.at(0)).not.toEqual(appView.playerView.model);
    });

    xit('plays the next song when the previous finishes', function(){
      // Implement this test
    });
  });

});
