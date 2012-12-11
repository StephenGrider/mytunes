describe("LibraryEntryView", function() {
  var view, model;

  beforeEach(function() {
    model = new Backbone.Model({
      artist: "Fakey McFakerson",
      title: "Never Gonna Mock You Up",
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  it("should set the song model's 'queuedAt' property when you click on it", function(){
    expect(model.attributes.queuedAt).toBeFalsy();
    view.$el.children().first().click();
    expect(model.attributes.queuedAt).toMatch(jasmine.any(Date));
  });
});