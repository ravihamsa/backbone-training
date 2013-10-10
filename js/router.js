(function(root){

    root.AppRouter = Backbone.Router.extend({
        routes:{
            '':'index',
            ':pageId':'renderPage'
        },
        index:function(){
            this.renderPage('home');
        },
        renderPage:function(pageId){
            var contentEl = $('.content')
            contentEl.empty();

            switch(pageId){
                case 'users':

                    var userCollection = new root.UserCollection();
                    var userView = new root.UserView({
                        collection:userCollection
                    });
                    userView.render();
                    userCollection.fetch();
                    contentEl.html(userView.el);
                    break;
                default:

                    var pageRequest = $.ajax('templates/'+pageId+'.html');
                    pageRequest.done(function(htmlString){
                        contentEl.html(htmlString);
                    })

                    break;
            }
        }

    })


})(root)