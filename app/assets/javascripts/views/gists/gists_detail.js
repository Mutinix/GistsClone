Gists.Views.GistDetail = Backbone.View.extend({

  tagName: 'li',

  render: function() {
    var that = this;

    var template = JST["gists/detail"]({
      gist: that.model
    });

    that.$el.html(template);
    return that;
  }

})