describe('App', function() {
  var app, fakeSongs;

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
    app = new App({library: fakeSongs});
  });

  it('creates a playlist on initialize', function(){
    expect(app.get('playlist') instanceof Playlist).toBeTruthy();
  });

  it('sets the current song when a "play" event is fired', function(){
    expect(app.get('currentSong')).toEqual(jasmine.any(Object));
    app.get('library').at(0).trigger('play', app.get('library').at(0));
    expect(app.get('currentSong')).toEqual(app.get('library').at(0));
  });

  it('queues the next song when an "enqueue" event is fired', function(){
    app.get('library').at(1).trigger('enqueue', app.get('library').at(1));
    expect(app.get('playlist').at(0)).toEqual(app.get('library').at(1));
  });


});
