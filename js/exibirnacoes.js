var bandeira = document.getElementById("bandeira");
    var Nome_Pais = document.getElementById("Nome_Pais");
    var Governo_Pais = document.getElementById("Governo_Pais");
    var Capital_Pais = document.getElementById("Capital_Pais");

    var trocarAlemanha = document.getElementById("trocarAlemanha");
    var imgAlemanha = "flags/ALEMANHA1914.png";
    var alemanha = document.getElementById("ALEMANHA")

    var trocarReinoUnido = document.getElementById("trocarReinoUnido");
    var imgReinoUnido = "flags/REINOUNIDO.png";

    var trocarAlemanha1920 = document.getElementById("trocarAlemanha1920");
    var imgAlemanha1920 = "flags/ALEMANHA1920.png";


function Alemanha1914() {
   // bandeira.src = imgAlemanha;
    console.log("ALEMANHA TROCADA");
    Nome_Pais.innerHTML = "Império Alemão";
    Governo_Pais.innerHTML = "Monarquia Parlamentarista Federal";
    Capital_Pais.innerHTML = "Berlim";
};

function alemanhafuncao(){
    alert("Clicou aqui ?")

    return Alemanha1914();
}

document.addEventListener("DOMContentLoaded", function() {

    var bandeira = document.getElementById("bandeira");
    var Nome_Pais = document.getElementById("Nome_Pais");
    var Governo_Pais = document.getElementById("Governo_Pais");
    var Capital_Pais = document.getElementById("Capital_Pais");

    var trocarAlemanha = document.getElementById("trocarAlemanha");
    var imgAlemanha = "flags/ALEMANHA1914.png";
    var alemanha = document.getElementById("ALEMANHA")

    var trocarReinoUnido = document.getElementById("trocarReinoUnido");
    var imgReinoUnido = "flags/REINOUNIDO.png";

    var trocarAlemanha1920 = document.getElementById("trocarAlemanha1920");
    var imgAlemanha1920 = "flags/ALEMANHA1920.png";

    function teste() {
        console.log("TESTE FUNCIONA")
    }

    // function Alemanha1914() {
    //     bandeira.src = imgAlemanha;
    //     console.log("ALEMANHA TROCADA");
    //     Nome_Pais.innerHTML = "Império Alemão";
    //     Governo_Pais.innerHTML = "Monarquia Parlamentarista Federal";
    //     Capital_Pais.innerHTML = "Berlim";
    // };

    function ReinoUnido() {
        bandeira.src = imgReinoUnido;
        console.log("REINO UNIDO TROCADO");
        Nome_Pais.innerHTML = "Reino Unido";
        Governo_Pais.innerHTML = "Monarquia Parlamentarista";
        Capital_Pais.innerHTML = "Londres"
    };

    function Alemanha1920() {
        bandeira.src = imgAlemanha1920;
        console.log("WEIMAR TROCADA");
        Nome_Pais.innerHTML = "República de Weimar";
        Governo_Pais.innerHTML = "República";
        Capital_Pais.innerHTML = "Berlim";
    };

    trocarAlemanha.addEventListener("click", Alemanha1914);
    trocarReinoUnido.addEventListener("click", ReinoUnido);
    trocarAlemanha1920.addEventListener("click", Alemanha1920);
});