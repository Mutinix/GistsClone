Gists.Routers.Gists = Backbone.Router.extend({

  initialize: function($rootEl, gists) {
    this.$rootEl = $rootEl;
    this.gists = gists;
  }

  routes: {
    "users/:id": "index"
  },

  index: function () {
    var that = this;


  }

});
