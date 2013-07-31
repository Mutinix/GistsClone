Gists.Routers.Gists = Backbone.Router.extend({

  initialize: function($rootEl, gists) {
    this.$rootEl = $rootEl;
    this.gists = gists;
  },

  routes: {
    "": "index",
    "gists/:id": "viewGist"
  },

  index: function () {
    var that = this;

    that.$rootEl.empty();
  },

  // viewGist: function(id) {
  //   var that = this;
  //
  //   var gist = that.gists.findWhere({id: id});
  //   var gistView = new Gists.Views.GistForm({
  //     model: gist;
  //   });
  //
  //   that.$rootEl.html(gistView.render().$el)
  // }

});
