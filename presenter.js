(function () {

    var curPage = 1;

    var pageCount = $('.page').length;

    var getPrevPage = function(){
        curPage --;
        if(curPage < 1){
            curPage = 1;
        }
        return curPage;
    }

    var getNextPage = function(){
        curPage ++;
        if(curPage > pageCount){
            curPage = pageCount;
        }
        return curPage;
    }

    var keys = {
        LEFT_ARROW:37,
        UP_ARROW:38,
        RIGHT_ARROW:39,
        DOWN_ARROW:40
    }

    var showPage = function(pageNo){
        $('.page').hide();
        var pageSelector = '.page'+pageNo;
        var pageEl = $(pageSelector);
        pageEl.show();
    }

    $('body').on('keydown',function(e){
        switch(e.keyCode){
            case keys.RIGHT_ARROW:
                showPage(getNextPage());
                break;
            case keys.LEFT_ARROW:
                showPage(getPrevPage());
                break;
            default:
                e.preventDefault();
                break;
        }


    })

    showPage(curPage);
})()