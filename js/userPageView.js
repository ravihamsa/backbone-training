(function(root){


    var Collection = Backbone.Collection.extend({
        url:'data/users.json',
        parse:function(data){
            return data.results;
        }
    })

    var ItemView = Backbone.View.extend({
        tagName:'tr',
        render:function(){
            var templateRequest = $.ajax('templates/user.html');
            var _this = this;
            templateRequest.done(function(htmlTemplate){
                var templateFunction = Handlebars.compile(htmlTemplate);
                _this.$el.html(templateFunction(_this.model.toJSON()));
            })

        }
    })

    var View = Backbone.View.extend({
        initialize:function(){
            this.collection.on('add', function(model){
                this.addUser(model);
            },this)
        },
        tagName:'table',
        className:'user-list',
        render:function(){
            var columns = ['name', 'picture', 'email', 'phone']
            var tr = $('<tr></tr>');
            _.each(columns, function (head) {
                tr.append('<th>' + head + '</th>');
            })

            this.$el.append(tr);
        },
        addUser:function(model){

            var userView = new ItemView({
                model:model
            })

            userView.render();
            userView.$el.appendTo(this.$el);
        }
    })


    root.UserView = View;
    root.UserCollection = Collection;

})(root)