let registrate = document.getElementById('registrate');
let inicioseccion = document.getElementById('inicioseccion');

registrate.addEventListener('mouseover',function(){
    inicioseccion.style.display='block';
});

registrate.addEventListener('click',function(){
    inicioseccion.style.display='block';
});

registrate.addEventListener('mouseleave',function(){
    inicioseccion.style.display='none';
});

// barra de buscador

let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miListado');

let archivo = 'main.json';

input.addEventListener('keydown',verificaInput);
boton.addEventListener('click',buscar);

function verificaInput(evento){
    if((evento.keyCode < 65 || evento.keyCode>90)&& evento.keyCode !=32 && evento.keyCode !=8){
        evento.preventDefault();
    }
}

function buscar(){
    lista.innerHTML = '';
    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida){
        for(let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())){
                let li = document.createElement('li');
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover',function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });
                li.addEventListener('mouseout',function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });
                li.appendChild(p);
                lista.appendChild(li);


            }
        }
    })

    .catch(function(error){
        console.log(error);
    });
}