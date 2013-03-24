describe('PlayerView', function() {
  var library, appView;

  beforeEach(function() {
    library = new Songs([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data2',
        url: '/test/bacon.mp3',
        title: 'test song2'
      }
    ]);
    // playerView is created in AppView initialize
    // access with appView.playerView
    appView = new AppView({model: new App({library: library})});
  });

  it('gets a new model when the first song is played', function(){
    expect(appView.playerView.model).toNotEqual(library.at(0));
    library.at(0).play();
    expect(appView.playerView.model).toEqual(library.at(0));
  });

  describe('Song transitions', function() {
    xit('dequeues a song when finished playing', function(){
      // Implement this test
    });

    xit('plays the next song when the previous finishes', function(){
      // Implement this test
    });
  });

});
