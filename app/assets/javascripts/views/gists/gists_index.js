Gists.Views.GistsIndex = Backbone.View.extend({

  tagName: 'table',

  initialize: function (params) {
    var that = this;
    this.favorites = params.favorites;

    var renderCallback = that.render.bind(that);
    _.each(["add", "remove", "change", "reset"], function (e) {
      that.listenTo(that.collection, e, renderCallback);
    });
  },

  events: {
    "click button.favorite": "favorite",
    "click button.unfavorite": "unfavorite"
  },

  render: function () {
    var that = this;
    var indexTemplate = JST["gists/index"]();

    that.$el.html(indexTemplate);

    that.collection.each(function(gist) {
      var gistDetail = new Gists.Views.GistDetail({
        model: gist,
        favorite: _(that.favorites).findWhere({gist_id: gist.id})
      });
      that.$el.append(gistDetail.render().$el);
    })
    return that;
  },

  favorite: function (event) {
    var that = this;

    var target = $(event.target)
    var gistId = target.attr("data-id");
    var favorite = new Gists.Models.Favorite({gist_id: gistId})

    var successCallback = function (collection, response, options) {
      target.removeClass("favorite");
      target.addClass("unfavorite");
      target.text("Unfavorite");
    }

    favorite.save(null, {
      wait: true,
      success: successCallback
    });
  },

  unfavorite: function (event) {
    var that = this;
    var target = $(event.target)
    var gistId = parseInt(target.attr("data-id"));

    var favorite = _.findWhere(that.favorites, {gist_id: gistId});
    $.ajax({
      type: "DELETE",
      url: "/gists/" + gistId + "/favorite",
      success: function () {
        target.removeClass("unfavorite");
        target.addClass("favorite");
        target.text("Favorite");
      }
    });

  }

});
