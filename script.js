document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let area = document.getElementById("area").value;
    let problema = document.getElementById("problema").value;

    let mensaje = `Hola, mi nombre es ${nombre}. 
Deseo agendar una cita en el área de ${area}. 
Motivo: ${problema}.`;

    let url = `https://wa.me/527421112886?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});