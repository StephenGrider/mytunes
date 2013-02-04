describe('PlayerView', function() {
  var view, songs;

  beforeEach(function() {
    songs = new Songs();
    songs.reset([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      }
    ]);
    view = new PlayerView({collection: songs});
  });

  it('should change when the first song is queued', function(){
    expect(view.model).toBeUndefined();
    var song = songs.models[0];
    song.set('queuedAt', new Date());
    expect(view.model).toEqual(song);
  });

  describe('what happens when the song ends', function(){

    xit('should remove the old song from the playlist');

    xit('should get the next song in the playlist');

  });
});