require.config({
    paths: {
        "jquery": "libs/jquery/jquery.min",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone",
        "text":'libs/requirejs-text/text',
        "handlebars":'libs/handlebars/handlebars.min',
        "jqm":'libs/jquery-mobile-bower/js/jquery.mobile-1.4.2.min',
        "jqmNavigator":'local/jqmNavigator/jqmNavigator',
        "domReady":'libs/requirejs-domready/domReady'
    },
    shim: {
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "handlebars": {
            exports: 'Handlebars'
        },
        jqm:{
            deps:['jquery', 'jqmNavigator']
        },
    }
});

require(['domReady','jquery', 'underscore', 'backbone','jqm'], function(domReady,$, _, Backbone,jqm){
    domReady(function () {
        function onDeviceReady(desktop) {
            if (desktop !== true) {
                cordova.exec(null, null, 'SplashScreen', 'hide', []);
            }
            $.mobile.pageContainer = $('#container');            
            $.mobile.defaultPageTransition = 'slide';

            // Pushing MainView
            var AppRouter = Backbone.Router.extend({
                initialize: function () {
                    
                },
                showLoading: function(text) {
                    if($.mobile) {
                        $.mobile.loading( 'show', {
                            text: text,
                            textVisible: true,
                            theme: 'd'
                        });
                    }
                    
                },
                hideLoading: function() {
                    $.mobile.loading( 'hide', {} );
                },
                routes: {
                    "": "home",
                    "page":"page"
                },
                home : function(){
                    this.showLoading("Henter forside");
                    var self = this;
                    require(['views/home/HomeView'], function (HomeView) {
                        
                        self.hideLoading();
                        $.mobile.jqmNavigator.replaceAll(new HomeView());
                        //,{transition:'fade'}
                    });
                },
                page : function() {
                    this.showLoading("Henter underside");
                    var self = this;
                    require(['views/page/PageView'], function (PageView) {
                        self.hideLoading();
                        $.mobile.jqmNavigator.pushView(new PageView());
                    });
                }
            });
            var app = new AppRouter();
            Backbone.history.start();
        }
        if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
            document.addEventListener('deviceready', onDeviceReady, false);
        } else {
            onDeviceReady(true);
        }
    });
});