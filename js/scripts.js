console.log('1');

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    /*
    //Conviene guardar los nombres de los elementos a querer modificar en variables para evitar reescribir código
    const logo = document.getElementById('logo');
    //Obtener un elemento mediante el nombre de su clase
    const navegacion = document.getElementsByClassName('navegacion');

    logo.hasAttribute('class');                     //Bsucar un atributo especifico(devuelve True o False)
    logo.getAttribute('class');                     //Obtiene el nombre por ejemplo de determinado atributo
    logo.setAttribute('class', 'nueva_clase');      //Cambia un atributo por otro, en este caso el nombre de una clase

    logo.style.display = 'none';                    //Ocultamos un elemento HTML desde JS

    var enlaces = document.getElementsByTagName('a'); //Así seleccionamos elementos HTML
    console.log(enlaces.length);                    //Para saber cuantos enlaces tenemos

    //Ejemplo de cambiar un atributo de todos los enlaces seleccionados previamente
    for (var i = 0; i < enlaces.length; i++){
      enlaces[i].setAttribute('tarjet', '_black');
    }

    //Tambien podemos usar varias funciones a la ve< para seleccionar elementos mas especificamente
    var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    console.log(enlacesSidebar);

    for (var i = 0; i < enlacesSidebar.length; i++){
      enlacesSidebar[i].setAttribute('href', 'https://www.google.com');
    }

    //Podemos seleccionar todos los tipos de elementos con All o elegir combinando elementos
    var encabezado = document.querySelector('aside h2');
    var encabezado = document.querySelectorAll('h2, footer p');

    console.log(encabezado); //Entre corchetes podemos elegir si mostrar un determinado elemento
    
    var enlace = document.querySelectorAll('a');

    for (var i=0; i < enlace.length; i++){
      console.log(enlace[i].innerText);      //con innerText accedemos al texto de los enlaces
    }

    var enlaces = document.querySelectorAll('#menu ul li a');
    console.log(enlaces[0].nodeType);
    console.log(enlaces[0].nodeName);
    console.log(enlaces[0].attributes);
    console.log(enlaces[0].firstChild);
    console.log(enlaces[0].firstChild.nodeValue);
    //Así mismo podemos cambiar las propiedades de los elementos desde aquí

    //Crear contenido (en este ejemplo en nuestro sidebar)
    var sidebar = document.querySelector('#sidebar');
    var nuevoElemento = document.createElement("H1");                 //Nuevo elemento
    var nuevoTexto = document.createTextNode("Hola Mundo");           
    nuevoElemento.appendChild(nuevoTexto);                            //Al elemento creado le agregamos otro, un hijo
    sidebar.appendChild(nuevoElemento);                               //Finalmente agremaos todo junto al sidebar
    

    //Agregar entrada
    var enlacesSidebar = document.querySelectorAll('#sidebar ul');
    //creando el enlace
    var nuevoEnlace = document.createElement('A');
    nuevoEnlace.setAttribute('href', '#');                      //Al enlace creado le agregamos el atributo href o queda nulo
    var textoEnlace = document.createTextNode('Entrada 6');     //Texto para el enlace o este quedara vacio
    nuevoEnlace.appendChild(textoEnlace);                       //Agregamos el texto al enlace
    //craemos la lista
    var nuevaLista = document.createElement('LI');              //Creamos el LI donde ira el enlace
    nuevaLista.appendChild(nuevoEnlace);                        //Agregamos el enlace a la lista
    //Lo agregamos al menu
    enlacesSidebar[0].appendChild(nuevaLista);

  
    //Clonar nodo
    var contenido = document.querySelectorAll('main'); //Seleccionamos el main para el ejemplo
    var nuevoContenido = contenido[0].cloneNode(true); //Clonamos el main y lo guardamos en una variable
    var sidebar = document.querySelector('aside');     //elegimos el lugar donde clonar
    sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]); //Realizamos la operacion de clonado, entre corchetes indicamos en que pocicion

    
    //Eliminar Nodos
    //Elegimos el elemento a eliminar
    var primerPost = document.querySelector('main article');
    //Eliminamos, primero con el parentNode nos movemos hacia el elemento padre y luego desde ahi seleccionamos el hijo a borrar
    primerPost.parentNode.removeChild(primerPost);

    //Otro ejemplo de eliminar, esta vez un elemento del menu de navegacion superior
    var enlaces = document.querySelectorAll('#navegacion nav ul li a')[9];//Entre corchetes indicamos el elemento a eliminar
    enlaces.parentNode.removeChild(enlaces);

    
    //reemplazar nodos
    var viejoNodo = document.querySelector('main h2');      //Elegimos el nodo a reemplazar
    var nuevoNodo = document.querySelector('footer h2')     //Elegimos al reemplazo
    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);//Reemplazamos

    //Reemplazar nodo con uno nuevo
    var nuevoTitulo = document.createElement('H2');
    var nuevoTexto = document.createTextNode('Hola Mundo');
    nuevoTitulo.appendChild(nuevoTexto);

    var viejoNodo = document.querySelector('main h2');
    viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);

    */
   
  });
  
})();

console.log('3');