describe('AppView', function() {
  var appView, app;

  beforeEach(function () {
    app = new App({library:
      new Backbone.Collection([
        {
          artist: 'Fakey McFakerson',
          title: 'Never Gonna Mock You Up',
          url: 'example/url'
        },
        {
          artist: 'BittyBacon',
          title: 'Sizzle Sundays',
          url: 'fake/url'
        }
      ])
    });
    appView = new AppView({model: app});
  });

  it('should generate a PlayerView when created', function(){
    expect(appView.playerView).toEqual(jasmine.any(PlayerView));
  });

  xit('should change currentSong on \'play\' event' , function() {
    // Implement the test
  })
});
