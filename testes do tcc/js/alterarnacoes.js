document.addEventListener("DOMContentLoaded", function() {
    const Nome = document.getElementById("Nome_Pais");
    const Capital = document.getElementById("Capital");
    const Governo = document.getElementById("Governo");
    const bandeira = document.getElementById("bandeira");
    const map = document.getElementById("map");
    
    function Albania1914(){
        bandeira.src = "bandeiras/ALBANIA1914.png";
        console.log("ALBANIA TROCADA");
        Nome.innerHTML = "Principado da Albânia";
        Governo.innerHTML = "Monarquia";
        Capital.innerHTML = "Durrës";
    }

    function Alemanha1914() {
        bandeira.src = "bandeiras/ALEMANHA1914.png";
        console.log("ALEMANHA TROCADA");
        Nome.innerHTML = "Império Alemão";
        Governo_Pais.innerHTML = "Monarquia Parlamentarista Federal";
        Capital_Pais.innerHTML = "Berlim";
    };
});