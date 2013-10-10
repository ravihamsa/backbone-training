(function(root){

    var navOptionTemplate = '<li><a href="#{{id}}">{{name}}</a></li>';
    var templateFunction = Handlebars.compile(navOptionTemplate);

    var NavigationView = Backbone.View.extend({
        tagName:'ul',
        render:function(){
            var _this = this;
            this.collection.each(function(model){
                _this.$el.append(templateFunction(model.toJSON()))
            })
        }
    })

    root.NavigationView = NavigationView;

})(root)