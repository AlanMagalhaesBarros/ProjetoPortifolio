
var el = document.querySelector(".multiText");
var text = "coder!"
var interval = 200;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    while (!char.length) {
      return clearInterval(typer);
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(el, text, interval);


/*const digitacao = document.querySelector('.multiText');
const texto = paragrafo.innerHTML.document.querySelector('.multiText');
const index = 0;

const escreve = () =>{
  paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '');
  if(texto.length > index){
    if(index == 0) {
      paragrafo.innerHTML = texto.charAt(index)
    }else{
      paragrafo.innerHTML += texto.charAt(index)
    }

    paragrafo.innerHTML +='|'
    index++
    setTimeout(escreve, 50)
  }
}*/ 





 
