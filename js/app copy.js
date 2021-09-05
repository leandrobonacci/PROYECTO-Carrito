const selector = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listacursos = document.querySelector('#lista-cursos');
let carritodecompras = [];
CargarEventListeners();
function CargarEventListeners(){
    listacursos.addEventListener('click', agregarCurso);

}



//funciones

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const CursoSeleccionado = e.target.parentElement.parentElement;
        leerContenido(CursoSeleccionado);

    }
}

function leerContenido(curso){


    console.log(curso);
            
             const infoCurso = {
                 imagen: curso.querySelector('img').src,
                 info: curso.querySelector('h4').textContent,
                 precio: curso.querySelector('.precio span').textContent,
                 id: curso.querySelector('a').getAttribute('data-id'),
                 cantidad: 1,
             }
              carritodecompras = [...carritodecompras, infoCurso];
             console.log(carritodecompras);

carritoHTML();

}

function carritoHTML(){


    limpiarHTML()

    carritodecompras.forEach((curso)=>{

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
                ${curso.info}
        </td>`;
//AGREGAR EN EL TABLE BODY (TB)

contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML(){
    // contenedorCarrito.innerHTML ='';
    while(contenedorCarrito.firstChild){

        contenedorCarrito.removeChild(contenedorCarrito.firstChild);

    }
}