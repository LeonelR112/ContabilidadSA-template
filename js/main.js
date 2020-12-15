$(window).ready(function (){

     //menú responsivo
    let botonMenu = document.getElementById('boton-menu');
    let menuResponsive = document.getElementById('menu-responsive');
    let botonCerrar = document.getElementById('botonCerrar')

    $(botonMenu).click(function(e){
        e.preventDefault();

        menuResponsive.style.top = "0px";
    });

    $(botonCerrar).click(function (e){
        e.preventDefault();
        menuResponsive.style.top = "-500px";
    })

     //---------------

     //funciones con scroll

    $(window).scroll(function (e){
        
        let scrollPositionTop = $(window).scrollTop()
        let menu = document.getElementById('navBar');

        //menu
        if(scrollPositionTop >= 156){
            menu.style.position = "fixed";
            menu.style.top = "0px"
            menu.style.zIndex = "65"
        }
        else{
            menu.style.position = "relative";
        }

        //background aninmado
        let presentacion = document.getElementById('presentacion');

        presentacion.style.backgroundPositionY = parseInt(scrollPositionTop / 3) + "%"

        let height = window.innerHeight;

        if(scrollPositionTop < height){
            document.getElementById('cajaAnimationIn').style.animation = "sideIn 1250ms ease-in";
        }

        if(scrollPositionTop > height){
            document.getElementById('cajaAnimationOut-In').style.animation = "out-in 1000ms ease-in";
        }

    });

     //-----------------

})