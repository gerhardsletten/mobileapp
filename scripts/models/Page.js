define(['jquery', 'backbone', 'underscore'], function ($, Backbone, _) {
    var Page = Backbone.Model.extend({
        url : function(){
            return 'http://ip.jsontest.com/';
        }
    });
    return Page;
});
