window.Gists = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar, $content, data) {
    var that = this;
    var gists = new Gists.Collections.Gists(data);

    that.installSidebar($sidebar, gists);

    new Gists.Routers.Gists($content, gists);
    Backbone.history.start();
  },

  installSidebar: function($sidebar, gists) {
    var that = this;

    var favorites = [];
    $.getJSON('/favorites', function(resp) {
      _(resp).each(function (fave) {favorites.push(fave);});
      var indexView = new Gists.Views.GistsIndex({
        collection: gists,
        favorites: favorites
      });
      $sidebar.html(indexView.render().$el);
    });


  }
};

$(document).ready(function(){
  var data = JSON.parse($('#bootstrapped_data').text())

  Gists.initialize($('#sidebar'), $('#content'), data);
});
