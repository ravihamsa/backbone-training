var demo = {}
demo.log = function(){

    var li = $('<li></li>')
    var array = _.toArray(arguments);
    _.each(array,function(item){
        if(typeof item === 'object'){
            li.append(JSON.stringify(item));
        }else{
            li.append(item);
        }


    })
    $('#logger').append(li);
}

demo.clearLog = function(){
    $('#logger').empty();
}

$('.clearMessages').on('click',function(e){
    e.preventDefault();
    $('#logger').empty();
})