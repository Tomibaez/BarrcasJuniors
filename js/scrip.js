function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function() {
  // Selector de instalaciones
  const buttons = document.querySelectorAll('.deporte-selector button');
  const pictures = document.querySelectorAll('.gallery_instalaciones .instalaciones__pic');

  if (buttons.length > 0 && pictures.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remover la clase active de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));
        // Añadir la clase active al botón clickeado
        this.classList.add('active');

        // Obtener el deporte seleccionado
        const deporte = this.getAttribute('data-deporte');

        // Mostrar las imágenes correspondientes
        pictures.forEach(pic => {
          if (pic.classList.contains(`deporte-${deporte}`)) {
            pic.classList.remove('hidden');
          } else {
            pic.classList.add('hidden');
          }
        });
      });
    });
  } else {
    console.log("No se encontraron botones o imágenes para la galería de instalaciones.");
  }
});



// function toggleMenu() {
//     const nav = document.querySelector('nav');
//     nav.classList.toggle('responsive');
// }
// // // function mostrarOcultarMenu(){
// // //     if(menuVisible){
// // //         document.getElementById("nav").classList ="";
// // //         menuVisible = false;
// // //     }else{
// // //         document.getElementById("nav").classList ="responsive";
// // //         menuVisible = true;
// // //     }
// // }
// function seleccionar(){
//     //oculto el menu una vez que selecciono una opcion
//     document.getElementById("nav").classList = "";
//     menuVisible = false;
// }