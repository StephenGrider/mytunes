describe('Playlist', function() {
  var playSpy, songData1, songData2;

  beforeEach(function() {
    playSpy = spyOn(Playlist.prototype, 'playFirst').andCallThrough();
    songData1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    };
    songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title:'test song 2'
    };
  });

  describe('when a song is added', function() {
    describe('when it is the only song in the playlist', function() {
      xit('plays it', function() {
        var playlist = new Playlist();
        playlist.add(songData1);
        expect(playSpy).toHaveBeenCalled();
      });
    });

    describe('when it is not the only song in the playlist', function() {
      xit('does nothing', function() {
        var playlist = new Playlist(songData1);
        playlist.add(songData2);
        expect(playSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('when a song ends', function() {
    xit('removes the song from the queue', function() {
      var playlist = new Playlist([songData1, songData2]);
      song2 = playlist.at(1);
      expect(playlist.length).toEqual(2);
      playlist.at(0).trigger('ended');
      expect(playlist.length).toEqual(1);
      expect(playlist.at(0)).toEqual(song2);
    });

    describe('if there are any songs left in the queue', function() {
      xit('plays the first song in the queue', function() {
        var playlist = new Playlist([songData1, songData2]);
        playlist.at(0).trigger('ended');
        expect(playSpy).toHaveBeenCalled();
      });
    });

    describe('if there are no songs left in the queue', function() {
      xit('does nothing', function() {
        var playlist = new Playlist(songData1);
        playlist.at(0).trigger('ended');
        expect(playSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('when a song is dequeued', function() {
    xit('removes the song', function() {
      removeSpy = spyOn(Playlist.prototype, 'remove').andCallThrough();
      var playlist = new Playlist(songData1);
      playlist.at(0).trigger('dequeue');
      expect(removeSpy).toHaveBeenCalled();
    });
  });

  describe('playFirst', function() {
    xit('plays the first song in the queue', function() {
      spyOn(Song.prototype, 'play').andCallThrough();
      var playlist = new Playlist(songData1);
      playlist.playFirst();
      expect(playlist.at(0).play).toHaveBeenCalled();
    });
  });
});
