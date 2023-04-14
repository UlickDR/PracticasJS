var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
//alert(resultado);

var h2=document.createElement("h2");
var texto=document.createTextNode(resultado);
h2.appendChild(texto);
document.body.appendChild(h2);