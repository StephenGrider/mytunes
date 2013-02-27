describe('PlayerView', function() {
  var view, library, appView;

  beforeEach(function() {
    library = new Songs([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      }
    ]);
    appView = new AppView({model: new App({library: library})});
    view = new PlayerView({model: appView});
  });

  it('gets a new model when the first song is played', function(){
    expect(view.model).toNotEqual(library.at(0));
debugger;
    library.at(0).play();
debugger;
    expect(view.model).toEqual(library.at(0));
  });

});
