describe('AppView', function() {
  var view, app, fakeSongs, fakeSongData;

  beforeEach(function () {
    fakeSongData = [
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
    ];
    fakeSongs = new Backbone.Collection(fakeSongData);
    app = new App({library: fakeSongs});
    view = new AppView({model: app});
  });

  it('should generate a PlayerView when created', function(){
    expect(view.playerView).toEqual(jasmine.any(Object));
  });

  xit('should change currentSong on \'play\' event' , function() {
    // Implement the test
  })
});
