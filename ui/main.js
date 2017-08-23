var button = document.getElementById('counter');
button.onlick = function(){
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};