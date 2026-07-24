 // 1. Giro de la foto en celulares
        const escenaGiro = document.querySelector('.escena-giro');
        if (escenaGiro) {
            escenaGiro.addEventListener('click', function () {
                this.classList.toggle('esta-girado');
            });
        }

        // 2. Barra de progreso de lectura
        const barraProgreso = document.getElementById('progreso-desplazamiento');
        window.addEventListener('scroll', () => {
            const desplazamiento = document.documentElement.scrollTop || document.body.scrollTop;
            const alturaTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const porcentaje = (desplazamiento / alturaTotal) * 100;
            if (barraProgreso) barraProgreso.style.width = porcentaje + '%';
        });

        // 3. Efecto de revelado al desplazar la página
        const elementosRevelar = document.querySelectorAll('section, .tarjeta-proyecto, .caja-habilidad, .elemento-cronologia');
        elementosRevelar.forEach(elemento => elemento.classList.add('revelar'));

        const revelarAlDesplazar = () => {
            const alturaVentana = window.innerHeight;
            elementosRevelar.forEach(elemento => {
                const topeElemento = elemento.getBoundingClientRect().top;
                const visibilidad = 100;
                if (topeElemento < alturaVentana - visibilidad) {
                    elemento.classList.add('activo');
                }
            });
        };

        window.addEventListener('scroll', revelarAlDesplazar);
        revelarAlDesplazar();

        // 4. Resaltado del menú según la sección activa
        const secciones = document.querySelectorAll('section, header');
        const enlacesNavegacion = document.querySelectorAll('.enlaces-navegacion a');

        window.addEventListener('scroll', () => {
            let seccionActual = '';
            secciones.forEach(seccion => {
                const topeSeccion = seccion.offsetTop;
                if (window.pageYOffset >= topeSeccion - 130) {
                    seccionActual = seccion.getAttribute('id');
                }
            });

            enlacesNavegacion.forEach(enlace => {
                enlace.classList.remove('activo');
                if (enlace.getAttribute('href') === `#${seccionActual}`) {
                    enlace.classList.add('activo');
                }
            });
        });

        // 5. Botón Volver arriba
        const botonVolverArriba = document.getElementById('volver-arriba');
        if (botonVolverArriba) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 400) {
                    botonVolverArriba.classList.add('visible');
                } else {
                    botonVolverArriba.classList.remove('visible');
                }
            });
        }

        document.querySelectorAll('.tarjeta-proyecto').forEach(t => {
            t.addEventListener('pointermove', e => {
                const r = t.getBoundingClientRect();
                t.style.setProperty('--mx', `${e.clientX - r.left}px`);
                t.style.setProperty('--my', `${e.clientY - r.top}px`);
            });
        });


        
  const btnHamburguesa = document.getElementById('boton-hamburguesa');
  const navEnlaces = document.getElementById('enlaces-navegacion');
  const enlaces = navEnlaces.querySelectorAll('a');

  // Alternar menú al hacer clic en el botón
  btnHamburguesa.addEventListener('click', () => {
    btnHamburguesa.classList.toggle('abierto');
    navEnlaces.classList.toggle('menu-abierto');
  });

  // Cerrar el menú automáticamente al hacer clic en un enlace
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
      btnHamburguesa.classList.remove('abierto');
      navEnlaces.classList.remove('menu-abierto');
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que aparezca el #nombre en la URL

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  });
});