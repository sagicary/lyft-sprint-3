
var numero=document.getElementById('botoninput');
numero.addEventListener('click', function(){
	var num=document.getElementById('input').value;
	if(num.length!=9){
		alert("Debe ingresar un número de 9 dígitos");
	}else{
		var text=document.getElementById('input');
		text.innerHTML = "Bien";
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
	if (isNaN(x)==true || isNaN(y)==true){
		alert("Debes ingresar números");
	}
	else if(x>10 || y>6){
		alert ("Para X debes ingresar un número entre 1 y 10 y para Y entre 1 y 6");
	}else{
		alert("Tu valor para 'X' fue: "+x+ " Y tu valor para 'Y' fue: "+y)
	}
});