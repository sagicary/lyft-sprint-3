
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