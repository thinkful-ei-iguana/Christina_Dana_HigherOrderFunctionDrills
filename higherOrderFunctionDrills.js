function repeat(fn, n) {
  [...Array(n)].forEach(x =>fn());  
}
let hello = function (){console.log('Hello World.');}
let goodbye = function (){console.log('Goodbye World.');}



repeat(hello,5);
repeat(goodbye,5);
