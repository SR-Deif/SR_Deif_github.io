function longitud(){
    var nombre=document.getElementById("resultado").value;
    alert(nombre.length);
}

function minuscu(){
    var mini=document.getElementById("minuscula").value;
    alert(mini.toLowerCase());
}

function mayuscu(){
    var mayu=document.getElementById("mayusculas").value;
    alert(mayu.toUpperCase());
}

function letr(){
    var primera=document.getElementById("letra").value;
    alert(primera.toUpperCase()[0]);
}

//grados

let celisus =document.getElementById("celsius");
let fahrenheit =document.getElementById("fahrenheit");
let kelvin =document.getElementById("kelvin");

function celafa(){
    let output=(parseFloat(celisus.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function celakel(){
    let output=(parseFloat(celisus.value)) + 273.15;
    kelvin.value = parseFloat(output.toFixed(2));
}

function faracel(){
    let output=(parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celisus.value= parseFloat(output.toFixed(2));

}

function kelafar(){
    let output=(parseFloat(kelvin.value) - 273.15) * 9/5 + 32  ;
    fahrenheit.value= parseFloat(output.toFixed(2));

}

function farakel(){
    let output=(parseFloat(fahrenheit.value) * 9/5 - 32  ) + 273.15 ;
    kelvin.value= parseFloat(output.toFixed(2));

}

function kelacel(){
    let output=(parseFloat(kelvin.value)) - 273.15 ;
    celisus.value= parseFloat(output.toFixed(2));

}

//figura
//circulo
var circulo =document.getElementById("circulo");
var circulo2 =document.getElementById("circulo2");
function result(){
    let output=(parseFloat(circulo.value)  * 3.14) * 3.14 ;
    alert(output.toFixed(2));
}
function result2(){
    let output=(parseFloat(circulo2.value)  * 2) * 3.14 ;
    alert(output.toFixed(2));
}
//triangulo

var area =document.getElementById("area");
var altura =document.getElementById("altura");
function tri(){
    let output=(parseFloat(area.value)  * 1) + 3/4;
    alert(output.toFixed(2));
}
function tri2(){
    let output=(parseFloat(altura.value)  *2) + 3/2 ;
    alert(output.toFixed(2));
}
//rectangulo
function rect(){
var ancho = parseInt.document.getElementById("ancho");
var altura2 =parseInt.document.getElementById("altura2");

    let area;

    area= ancho * ancho;
    alert(area)

}

//formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){4,15}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	documento: /^\d{5,10}$/,
    edad:/^[0-9]{1,3}$/
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	documento: false,
    edad: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
		break;
        case "edad":
			validarCampo(expresiones.edad, e.target, 'edad');
		break;
	}
}
function validarEdad(edad){
    var formato = /^[0-9]{1,3}$/;
    edad = edad.replace(/\+/g, '\+');
    
    mostrarValidacion('#edad',formato.test(edad)&& edad<=150 && edad>=5);
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.documento && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

