(function(root){
    var headerView = new root.HeaderView({
        model:root.appModel
    });
    headerView.render();


    var navigationView = new root.NavigationView({
        collection:root.navCollection
    })
    navigationView.render();
    navigationView.$el.appendTo('.navigation');






    var router = new root.AppRouter();
    Backbone.history.start();

})(root)