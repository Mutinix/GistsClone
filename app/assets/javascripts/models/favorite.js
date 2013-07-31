Gists.Models.Favorite = Backbone.Model.extend({
  initialize: function(options) {
    this.url = "/gists/" + options.gist_id + "/favorite"
  }
});