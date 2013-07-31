Gists.Views.GistsIndex = Backbone.View.extend({

  initialize: function () {
    var that = this;

    var renderCallback = that.render.bind(that);
    _.each(["add", "remove", "change", "reset"], function (e) {
      that.listenTo(that.collection, e, renderCallback);
    });
  },

  render: function () {
    var that = this;

    var template = JST["gists/index"]();

    that.$el.html(template);

    that.collection.each(function(gist) {
      var gistDetail = new Gists.Views.GistDetail({
        model: gist
      });
      that.$el.append(gistDetail.render().$el);
    })

    return that;
  }

});
