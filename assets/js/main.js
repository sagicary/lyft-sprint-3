
var numero=document.getElementById('botoninput');
numero.addEventListener('click', function(){
	var num=document.getElementById('input').value;
	if(isNaN(num)==true){
		alert ("Sólo puedes ingresar números");
	}else if(num.length!=9){
		alert("Debe ingresar un número de 9 dígitos");
	}else{
		var text=document.getElementById('input');
		alert("Su número se ha registrado correctamente");
	}
});

var juego=document.getElementById('jugar');
juego.addEventListener('click', function(){
	var x = document.getElementById('xcorde').value;
	var y = document.getElementById("ycorde").value;
	x=parseInt(x);
	y=parseInt(y);
	console.log(x);
	console.log(y);
	if (isNaN(x)==true || isNaN(y)==true){
		alert("Debes ingresar números");
	}
	else if(x>10){
		alert ("Para X debes ingresar un número entre 1 y 10");
	}else if(y>6){
		alert ("Para Y debes ingresar un número entre 1 y 6");
	}else{
		alert("Tu valor para 'X' fue: "+x+ " Y tu valor para 'Y' fue: "+y);
		
		document.getElementById("ocultar").style.display = "none";
		//Probando tablero de Blanca
	//Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
//Ingreso el auto en la posicion 3,5
tablero[x][y] = "<img src='assets/img/car.png' class='imagen' width='10' height='10'>";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}	
}
});