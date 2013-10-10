(function(root){

    var templateFunction = Handlebars.compile($('#headerTemplate').html());

    var HeaderView = Backbone.View.extend({
        el:'.header',
        render:function(){
            this.$el.html(templateFunction(this.model.toJSON()));
        }
    })

    root.HeaderView = HeaderView;

})(root)