function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdownActividades');
    const dropdownMenu = document.querySelector('.nav-item .dropdown-menu');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });
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