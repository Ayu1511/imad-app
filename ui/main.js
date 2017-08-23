console.log('Loaded!');
var ele=document.getElementById('main');
ele.innerHTML="New value";

var img=document.getElementById('img');
var marginLeft = 0;

function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
    var interval = setInterval(moveRight, 100);
};