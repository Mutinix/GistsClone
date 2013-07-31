Gists.Views.GistDetail = Backbone.View.extend({

  initialize: function (params) {
    this.favorite = params.favorite;
  },

  tagName: 'tr',

  render: function() {
    var that = this;

    var template = JST["gists/detail"]({
      gist: that.model,
      favorite: that.favorite
    });

    that.$el.html(template);
    return that;
  }

})