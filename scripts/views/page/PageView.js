define(['jquery', 'underscore', 'backbone', 'text!views/page/PageView.tpl','handlebars'],
function ($, _, Backbone, PageViewTemplate,Handlebars) {
    var PageView = Backbone.View.extend({
        initialize: function() {
        },
        events:{
            'vclick .js-back-button':'goBack',
        },
        render:function () {
            var templ = Handlebars.compile(PageViewTemplate);
            console.log(this.model.toJSON());
            this.$el.html( templ(this.model.toJSON()) );
            return this;
        },
        goBack : function(e) {
            console.log("Go back to HomeView");
            e.preventDefault();
            if( $.mobile.jqmNavigator.getViews().length > 1 ) {
                $.mobile.jqmNavigator.popView();
                Backbone.history.navigate('/', false);
            } else {
                Backbone.history.navigate('/', true);
            }
        }

    });
    return PageView;
});
