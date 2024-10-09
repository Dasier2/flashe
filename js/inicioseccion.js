const nombre = document.getElementById('userName');
const email = document.getElementById('email');
const emailConfirmar = document.getElementById('emailc');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordc');

const errorUsuario = document.getElementById('mensaje');
const errorEmail = document.getElementById('mensajeCorreo');
const errorEmailConfirm = document.getElementById('mensajeCorreoConfirmacion');
const errorPassword = document.getElementById('mensajeContraseña');
const errorPasswordConfirm = document.getElementById('mensajeContraseñaConfirmacion');
const envioExitoso = document.getElementsByClassName('formularioEnvioExitoso');

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('input');

const expresiones = {
    usuario: /^[a-zA-Z0-9.]{3,24}$/,
    correo: /^[\w_.]+@[\w_]+(\.[a-zA-Z]{2,4}){1,2}$/,
    password: /^.{8,16}$/
};

const campos = {
    nombre: false,
    email: false,
    password: false
};



const validarFormulario = (e)=>{
    switch (e.target.id){
        case "userName":
			const nombreValue = nombre.value;
			if(expresiones.usuario.test(nombreValue)){
				nombre.classList.add('valido');
				nombre.classList.remove('invalido');
				errorUsuario .classList.remove('mostrar');
				campos[nombre] = true;
			}else{
				nombre.classList.add('invalido');
				nombre.classList.remove('valido');
				errorUsuario.classList.add('mostrar');
				campos[nombre] = false;
			}
		break;
		case "email":
			const emailValue = email.value;
			if(expresiones.correo.test(emailValue)){
				email.classList.add('valido');
				email.classList.remove('invalido');
				errorEmail.classList.remove('mostrar');
				campos[email] = true;
			}else{
				email.classList.add('invalido');
				email.classList.remove('valido');
				errorEmail.classList.add('mostrar');
				campos[email] = false;
			}
		break;
		case "emailc":
			const email1 = email;
			const email2 = emailConfirmar;

			if(email1.value !== email2.value){
				emailConfirmar.classList.add('invalido');
				emailConfirmar.classList.remove('valido');
				errorEmailConfirm.classList.add('mostrar');
				campos[email] = true;
			}else{
				emailConfirmar.classList.add('valido');
				emailConfirmar.classList.remove('invalido');
				errorEmailConfirm.classList.remove('mostrar');
				campos[email] = false;
			}
		break;
		case "password":
			const passwordValue = password.value;
			if(expresiones.password.test(passwordValue)){
				password.classList.add('valido');
				password.classList.remove('invalido');
				errorPassword.classList.remove('mostrar');
				campos[password] = true;
			}else{
				password.classList.add('invalido');
				password.classList.remove('valido');
				errorPassword.classList.add('mostrar');
				campos[password] = false;
			}
		case "passwordc":
			const password1 = password;
			const password2 = passwordConfirm;

			if(password1.value !== password2.value){
				passwordConfirm.classList.add('invalido');
				passwordConfirm.classList.remove('valido');
				errorPasswordConfirm.classList.add('mostrar');
				campos[password] = true;
			}else{
				passwordConfirm.classList.add('valido');
				passwordConfirm.classList.remove('invalido');
				errorPasswordConfirm.classList.remove('mostrar');
				campos[password] = false;
			}
		break;
    };
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	envioExitoso.classList.add('mostrar');
});


