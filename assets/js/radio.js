    const abrir_radio = document.getElementById('abrir_radio');
    const cerrar_radio = document.getElementById('cerrar_radio');
    const radio_content = document.getElementById('radio_content');

    abrir_radio.addEventListener('click', function () {
    radio_content.classList.add('abierto');
    radio_content.classList.remove('cerrado');
});

    cerrar_radio.addEventListener('click', function () {
    radio_content.classList.remove('abierto');
    radio_content.classList.add('cerrado');
});