describe('Playlist', function() {
  beforeEach(function() {
    this.playSpy = spyOn(Playlist.prototype, 'playFirst').andCallThrough();
    this.song1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    };
    this.song2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title:'test song 2'
    };
  });

  describe('when a song is added', function() {
    describe('when it is the only song in the playlist', function() {
      it('plays it', function() {
        var playlist = new Playlist();
        playlist.add(this.song1);
        expect(this.playSpy).toHaveBeenCalled();
      });
    });

    describe('when it is not the only song in the playlist', function() {
      it('does nothing', function() {
        var playlist = new Playlist(this.song1);
        playlist.add(this.song2);
        expect(this.playSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('when a song ends', function() {
    it('removes the song from the queue', function() {
      var playlist = new Playlist([this.song1, this.song2]);
      expect(playlist.models.length).toEqual(2);
      playlist.models[0].trigger('ended');
      expect(playlist.length).toEqual(1);
    });

    describe('if there are any songs left in the queue', function() {
      it('plays the first song in the queue', function() {
        var playlist = new Playlist([this.song1, this.song2]);
        playlist.models[0].trigger('ended');
        expect(this.playSpy).toHaveBeenCalled();
      });
    });

    describe('if there are no songs left in the queue', function() {
      it('does nothing', function() {
        var playlist = new Playlist(this.song1);
        playlist.models[0].trigger('ended');
        expect(this.playSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('when a song is dequeued', function() {
    it('removes the song', function() {
      removeSpy = spyOn(Playlist.prototype, 'remove').andCallThrough();
      var playlist = new Playlist(this.song1);
      playlist.models[0].trigger('dequeue');
      expect(removeSpy).toHaveBeenCalled();
    });
  });

  describe('playFirst', function() {
    it('plays the first song in the queue', function() {
      spyOn(Song.prototype, 'play').andCallThrough();
      var playlist = new Playlist(this.song1);
      playlist.playFirst();
      expect(playlist.models[0].play).toHaveBeenCalled();
    });
  });
});
