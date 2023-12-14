document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menuItems = document.getElementById('menuItems');
    const closeBtn = document.getElementById('closeBtn');
    const content = document.getElementById('logoID');
    

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);
    content.addEventListener('keydown', handleContentKeydown);
 

    // Agregar un listener para cambiar el estilo en el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleWindowResize);


    function toggleMenu() {
        const displayValue = window.getComputedStyle(menuItems).getPropertyValue('display');
        
        if (displayValue === 'none') {
            menuItems.style.display = 'block';
            menuBtn.setAttribute('aria-expanded', 'true');
            menuItems.querySelector('a').focus();
        } else {
            menuItems.style.display = 'none';
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.focus();
        }
    }

    function closeMenu() {
        menuItems.style.display = 'none';
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
    }

    function handleContentKeydown(event) {
        console.log("quiero ir al prinicpal")
        if (event.key === 'Enter') {
            console.log("entre al if");
            contenidoPrincipal= document.getElementById('content');
            
            contenidoPrincipal.setAttribute('tabIndex', '0'); // Establecer tabindex en 0 en 'content'
            contenidoPrincipal.focus();
        }
    }
    
//    //foco del menu ultimo elemento para que sea circular.
//     document.addEventListener('keydown', function (event) {
//         const elementoActualmenteEnFoco = document.activeElement;
    
//         // Reemplaza 'miElemento' con el ID de tu elemento específico
//         const idDelElemento = 'contactoID';
//         if(event.key === 'Tab'){
//             if (elementoActualmenteEnFoco.id === idDelElemento) {
//                 console.log('Estás en el elemento con el ID ' + idDelElemento);
//                 contenidoPrincipal= document.getElementById('closeBtn');
                    
//                 contenidoPrincipal.setAttribute('tabIndex', '0'); // Establecer tabindex en 0 en 'content'
//                 contenidoPrincipal.focus();
//             } else {
//                 console.log('No estás en el elemento con el ID ' + idDelElemento);
//             }
//         }
       
//     });
  
       
    function handleWindowResize() {
        const screenWidth = window.innerWidth;

        // Verificar el ancho de la pantalla y establecer el estilo del menú en consecuencia
        if (screenWidth >= 768) {
            menuItems.style.display = 'flex';
            menuItems.style.flexDirection = 'row';
        } else {
            menuItems.style.display = 'none';
        }
    }

    // Llamar a la función de manejo del tamaño de la ventana al cargar la página
    handleWindowResize();
 
});



function navegarTeclado(event) {
    var menuItems = document.getElementById('menuItems');
    var elementos = menuItems.querySelectorAll('[tabindex="0"]');
    var primerElemento = elementos[0];
    var ultimoElemento = elementos[elementos.length - 1];


    const screenWidth = window.innerWidth;

    // Verificar el ancho de la pantalla y establecer el estilo del menú en consecuencia
    if (screenWidth >= 768) {
        menuItems.style.display = 'flex';
        menuItems.style.flexDirection = 'row';
    } else {
        if (event.key === 'Tab' && !event.shiftKey) {
            // Avanzar al siguiente elemento
            if (document.activeElement === ultimoElemento) {
                primerElemento.focus();
                event.preventDefault();
            }
        } else if (event.key === 'Tab' && event.shiftKey) {
            // Retroceder al elemento anterior
            if (document.activeElement === primerElemento) {
                ultimoElemento.focus();
                event.preventDefault();
            }
        } else if (event.key === 'Escape') {
            // Cerrar el pop-up al presionar Escape
            closeMenu();
        }
    }

    
}