define(['jquery', 'underscore', 'backbone', 'text!views/home/HomeView.tpl','handlebars'],
function ($, _, Backbone, HomeViewTemplate,Handlebars) {
    var HomeView = Backbone.View.extend({
        initialize: function() {
        },
        events:{
        },
        render:function () {
            var templ = Handlebars.compile(HomeViewTemplate);
            this.$el.html( templ( {test:"hei verden"} ) );
            return this;
        }
    });
    return HomeView;
});
