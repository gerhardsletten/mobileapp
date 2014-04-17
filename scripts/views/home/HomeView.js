define(['jquery', 'underscore', 'backbone', 'text!views/home/HomeView.tpl','handlebars'],
function ($, _, Backbone, HomeViewTemplate,Handlebars) {
    var HomeView = Backbone.View.extend({
        initialize: function() {
        },
        events:{
            'vclick .js-test-button':'testAction',
        },
        render:function () {
            var templ = Handlebars.compile(HomeViewTemplate);
            this.$el.html( templ( {test:"hei verden"} ) );
            return this;
        },
        testAction:function(event) {
            event.preventDefault();
            console.log("hi");
        }

    });
    return HomeView;
});
