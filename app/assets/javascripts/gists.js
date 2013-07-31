window.Gists = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, data) {
    var that = this;
    var gists = new Gists.Collections.Gists(data);

    new Gists.Routers.Gists($rootEl, gists);
    Backbone.history.start();
}};

$(document).ready(function(){
  var data = JSON.parse($('#bootstrapped_data').text())

  Gists.initialize($('body'), data);
});
