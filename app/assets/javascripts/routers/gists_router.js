Gists.Routers.Gists = Backbone.Router.extend({

  initialize: function($rootEl, gists) {
    this.$rootEl = $rootEl;
    this.gists = gists;
  },

  routes: {
    "": "index"
  },

  index: function () {
    console.log("Routed here!");
    var that = this;

    var indexView = new Gists.Views.GistsIndex({
      collection: that.gists
    });

    that.$rootEl.html(indexView.render().$el);
  }

});
