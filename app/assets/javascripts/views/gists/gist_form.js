Gists.Views.GistForm = Backbone.View.extend({

  events: {
    "click input.submit": "createGist"
  },

  render: function () {
    var that = this;

    var template = JST["gists/form"]({

    });

    that.$el.html(template);
    return that;
  },

  createGist: function (event) {
    event.preventDefault();
    var that = this;

    var title = that.$('#gist-title').val()

    var gist = new Gists.Models.Gist({title: title});
    that.collection.create(gist, {
      wait: true
    })

  }

});