define(['jquery', 'underscore', 'backbone', 'text!views/page/PageView.tpl','handlebars'],
function ($, _, Backbone, PageViewTemplate,Handlebars) {
    var PageView = Backbone.View.extend({
        initialize: function() {
        },
        events:{
            'vclick .js-back-buttonx':'goBack',
        },
        render:function () {
            var templ = Handlebars.compile(PageViewTemplate);
            this.$el.html( templ() );
            return this;
        },
        goBack : function(e) {
            console.log("test");
            e.preventDefault();
            if( $.mobile.jqmNavigator.getViews().length > 1 ) {
                $.mobile.jqmNavigator.popView();
            } else {
                Backbone.history.navigate('/', true);
            }
        }

    });
    return PageView;
});
