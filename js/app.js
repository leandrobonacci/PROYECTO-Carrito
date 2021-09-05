const listacarrito = document.querySelector('#lista-carrito tbody');
const listacursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito');
const vaciarcarritobtn = document.querySelector('#vaciar-carrito');
let carritodecompras = [];


cargareventlistener();


function cargareventlistener(){

    listacursos.addEventListener('click', AgregarCurso);
    carrito.addEventListener('click', eliminarcurso);
    vaciarcarritobtn.addEventListener('click', ()=>{
        carritodecompras = [];
        cleanHTML();
    })

}

function AgregarCurso(e){
      e.preventDefault();
      if(e.target.classList.contains('agregar-carrito')){
        const CursoSeleccionado = e.target.parentElement.parentElement;
        leercontenido(CursoSeleccionado);
     

      }

    
}

function eliminarcurso(a){
    a.preventDefault();
    
    if(a.target.classList.contains('borrar-curso')){
        cursoId = a.target.getAttribute('data-id');
    carritodecompras = carritodecompras.filter(curso=> curso.id !== cursoId);
    cleanHTML();
    carritoHTML();
}
}






//FUNCA PERFECTO, LEE EL HTML Y LO METE A UN ARREGLO

function leercontenido(curso){

    const infocurso = {
    imagen: curso.querySelector('img').src,
    info: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad : 1,

}



//REVISAR SI ESTA S IESTA SUMA 1

const existe = carritodecompras.some(curso => curso.id === infocurso.id);
if (existe){
    const cursos = carritodecompras.map(curso =>{
        if (curso.id === infocurso.id){

            curso.cantidad++;
            return curso; //retorna el objeto actualizado

        }
        else{
            return curso; //objetos no duplicados
        }
    });

    carritodecompras = [...cursos];

}
else{
    carritodecompras = [...carritodecompras, infocurso];
    
};




carritoHTML();
}
//MUESTRA EL HTML FALTA ACOMODAR LA TABLA PARA QUE QUEDE BIEN ;;; ¡TERMINAR HOY SI O SI !
function carritoHTML(){

    cleanHTML();
  
    carritodecompras.forEach(curso=>
    {
    const { imagen, info, precio, cantidad, id } = curso;
    const row = document.createElement('tr');

    row.innerHTML  = `
    <td> <img src = "${imagen}" width="100"> </td>
    <td> ${info}</td>
    <td> ${precio}</td>
    <td> ${cantidad}</td>
    <td> <a href="#" class="borrar-curso" data-id="${id}"> X </a> </td>
    `;
    //agrega el html del carrito en el tb
    listacarrito.appendChild(row);
    
    
    })
    }
    function cleanHTML(){
    while(listacarrito.firstChild){
        listacarrito.removeChild(listacarrito.firstChild);
    }
}
