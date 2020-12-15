$(window).ready(function (){

     //menú responsivo
    let botonMenu = document.getElementById('boton-menu');
    let menuResponsive = document.getElementById('menu-responsive');
    let botonCerrar = document.getElementById('botonCerrar')

    $(botonMenu).click(function(e){
        console.log(e)
        e.preventDefault();

        menuResponsive.style.top = "0px";
    });

    $(botonCerrar).click(function (e){
        e.preventDefault();
        menuResponsive.style.top = "-500px";
    })

     //---------------
})