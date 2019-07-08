// var  heading = document.querySelector('h1');
// heading.texstContent = 'Hello World'


var myHeading = document.querySelector('h1');
console.log('heading is ', myHeading);
myHeading.textContent = 'Hello world!';

var buttom = document.querySelector('button');
buttom.onclick = function(){
    setName();
}

setName = function(){

    var name = prompt('please enter your name ');
    myHeading.textContent = name + ':)'
}





var image = document.querySelector('img');
image.onclick = function(){
    console.log('get attribut', image.getAttribute('src'));

    image.setAttribute('src','script/images/img2.jpeg');

}