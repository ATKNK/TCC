document.addEventListener("DOMContentLoaded", function() {

    const bandeira = document.getElementById("bandeira");
    const Nome_Pais = document.getElementById("Nome_Pais");
    const Governo_Pais = document.getElementById("Governo_Pais");
    const Capital_Pais = document.getElementById("Capital_Pais");

    const trocarAlemanha = document.getElementById("trocarAlemanha");
    const imgAlemanha = "flags/ALEMANHA1914.png";


    const trocarReinoUnido = document.getElementById("trocarReinoUnido");
    const imgReinoUnido = "flags/REINOUNIDO.png";



    trocarAlemanha.addEventListener("click", function() {
        bandeira.src = imgAlemanha;
        console.log("ALEMANHA TROCADA");
        Nome_Pais.innerHTML = "Império Alemão";
        Governo_Pais.innerHTML = "Monarquia Absolutista";
        Capital_Pais.innerHTML = "Berlim";
    });

    trocarReinoUnido.addEventListener("click", function() {
        bandeira.src = imgReinoUnido;
        console.log("REINO UNIDO TROCADO");
        Nome_Pais.innerHTML = "Reino Unido";
        Governo_Pais.innerHTML = "Monarquia Parlamentarista";
        Capital_Pais.innerHTML = "Londres"
    });
});