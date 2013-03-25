describe('PlayerView', function() {
  var library, appView;

  beforeEach(function() {
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

  describe('Song transitions', function() {
    it('dequeues a song when finished playing & plays the next song', function(){
      library.at(0).play();
      var originalSong = appView.playerView.model;
      playlist.add(library.at(1));
      // Simulate a song end event being triggered
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).not.toEqual(originalSong);
    });
  });

});
