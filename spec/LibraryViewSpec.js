describe("LibraryView", function() {
  var view, fakeSongs, fakeSongData, fakeSubview;

  beforeEach(function() {
    fakeSongData = [
      {data: "data"},
      {data2: "data2"}
    ];
    fakeSongs = new Backbone.Collection();
    fakeSongs.reset(fakeSongData);

    fakeSubview = { render: jasmine.createSpy() };
    spyOn(window, 'LibraryEntryView').andReturn(fakeSubview);

    view = new LibraryView({collection: fakeSongs});
  });

  it("should create some subviews when you create it", function(){
    expect(LibraryEntryView.callCount).toEqual(fakeSongData.length);
  });

  it("should render its subviews when you render it", function(){
    view.render();
    expect(fakeSubview.render.callCount).toEqual(fakeSongData.length);
  });

  //Implement the test
  xit("should have a header element", function(){
  });
});