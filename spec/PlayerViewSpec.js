describe("PlayerView", function() {
  var view, collection;

  beforeEach(function() {
    collection = new Songs();
    collection.reset([
      {fake: "data", url: "/test/testsong.mp3", title:'test song'}
    ]);
    view = new PlayerView({collection: collection});
  });

  it("should change when the first song is queued", function(){
    expect(view.model).toBeUndefined();
    var song = collection.models[0];
    song.set("queuedAt", new Date());
    expect(view.model).toEqual(song);
  });

  //Complete these specs in that govern application behavior during song transitions, and implement the specified functionality
  xdescribe("what happens when the song ends", function(){
    xit("should remove the old song from the playlist");
    xit("should get the next song in the playlist");
  });
});