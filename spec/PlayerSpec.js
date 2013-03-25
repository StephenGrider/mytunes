describe('Player', function() {

  beforeEach(function() {
  });

  it('gets its model property set to any song that is played', function(){
    expect(appView.playerView.model).not.toEqual(library.at(0));
    library.at(0).play();
    expect(appView.playerView.model).toEqual(library.at(0));
  });

  describe('Song transitions', function() {
    it('dequeues a song when finished playing & plays the next song', function(){
    });
  });

});
