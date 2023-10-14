document.addEventListener("DOMContentLoaded", function() {
    const mapa = document.getElementById("mapa");

    const botao1914 = document.getElementById("botao1914");
    const botao1920 = document.getElementById("botao1920");
    const botao1936 = document.getElementById("botao1936");

    var ano = 1914;

    botao1914.addEventListener("click", function() {
        mapa.data = "maps/1914.svg"
        ano = 1914;
        const elementoAno = document.getElementById("Ano");
        elementoAno.textContent = ano;
    });

    botao1920.addEventListener("click", function() {
        mapa.data = "maps/1920.svg"
        ano = 1920;
        const elementoAno = document.getElementById("Ano");
        elementoAno.textContent = ano;
    });

    botao1936.addEventListener("click", function() {
        mapa.data = "maps/1936.svg"
        ano = 1936;
        const elementoAno = document.getElementById("Ano");
        elementoAno.textContent = ano;
    });
});