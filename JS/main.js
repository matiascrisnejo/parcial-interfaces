const btbEnvio = document.getElementById("enviarCorreo");

btbEnvio.addEventListener("click", function(e) {
    e.preventDefault();
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const email=document.getElementById("email").value;
    const mensaje=document.getElementById("mensaje").value;
    window.location.href=`mailto:crisnejomatias@gmail.com?
    subject=envioDesdeFormulario&body=nombre%3A${nombre}%0Aapellido%3A
    ${apellido}%0Aemail%3A${email}%0Amensaje%3A${mensaje}`;
});