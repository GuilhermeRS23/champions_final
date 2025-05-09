const dataEvento = new Date("May 31, 2025 16:00:00");
const timeEvento = dataEvento.getTime();

const contarHoras = setInterval(function () {
    const elementoHTML = document.getElementById("contagem");
    const dataAtual = new Date();
    const timeAtual = dataAtual.getTime();

    const distanciaAteOEvento = timeEvento - timeAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const dias = Math.floor(distanciaAteOEvento / diaEmMs);
    const horas = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutos = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundos = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    elementoHTML.innerHTML = `${dias}d ${horas}hrs ${minutos}min ${segundos}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contarHoras);
        elementoHTML.innerHTML = "Final já realizada, até a próxima temporada";
    }
}, 1000);