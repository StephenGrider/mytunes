describe('Song', function() {
  var trigSpy, model;

  beforeEach(function() {
    trigSpy = spyOn(Song.prototype, 'trigger').andCallThrough();
    model = new Song({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      model.play();
      expect(trigSpy).toHaveBeenCalledWith('play', model);
    });
  });

  xdescribe('enqueue', function() {
    it('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(trigSpy).toHaveBeenCalledWith('enqueue', model);
    });
  });

  xdescribe('dequeue', function() {
    it('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(trigSpy).toHaveBeenCalledWith('dequeue', model);
    });
  });
});
