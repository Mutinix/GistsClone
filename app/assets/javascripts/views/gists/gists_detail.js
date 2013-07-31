Gists.Views.GistDetail = Backbone.View.extend({

  render: function() {
    var that = this;

    var template = JST["gists/detail"]({
      model: that.model
    });

    that.$el.html(template);
    return that;
  }

})