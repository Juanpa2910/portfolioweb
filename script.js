let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;

}

//funcion que aplica las animaciones de habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("unity");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("illustrator");
        habilidades[5].classList.add("premiere");
        habilidades[6].classList.add("blender");
        habilidades[7].classList.add("visual");
        habilidades[8].classList.add("figma");
        habilidades[9].classList.add("wordpress");
        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("liderazgo");
        habilidades[12].classList.add("trabajo");
        habilidades[13].classList.add("creatividad");
        habilidades[14].classList.add("dedicacion");
        habilidades[15].classList.add("project");
    }
}

//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

function descargarPDF() {
    // Nombre del archivo PDF en los activos
    const nombrePDF = 'cvjp.pdf';

    // Ruta relativa al archivo PDF dentro de la carpeta de activos
    const rutaPDF = 'images/' + nombrePDF;

    // Crear un enlace temporal
    const enlaceTemp = document.createElement('a');
    enlaceTemp.href = rutaPDF;
    enlaceTemp.target = '_blank'; // Abrir en una nueva pestaña si es posible
    enlaceTemp.download = nombrePDF; // Establecer el atributo de descarga para iniciar la descarga

    // Simular el clic en el enlace
    enlaceTemp.click();
}

function redireccionar(url) {
    // Redirigir a la URL proporcionada
    window.location.href = url;
}