describe('Song', function() {
  beforeEach(function() {
    this.trigSpy = spyOn(Song.prototype, 'trigger').andCallThrough();
    this.model = new Song({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      this.model.play();
      expect(this.trigSpy).toHaveBeenCalledWith('play', this.model);
    });
  });

  xdescribe('enqueue', function() {
    it('triggers an "enqueue" event', function() {
      this.model.enqueue();
      expect(this.trigSpy).toHaveBeenCalledWith('enqueue', this.model);
    });
  });

  xdescribe('dequeue', function() {
    it('triggers a "dequeue" event', function() {
      this.model.dequeue();
      expect(this.trigSpy).toHaveBeenCalledWith('dequeue', this.model);
    });
  });
});
