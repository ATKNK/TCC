document.addEventListener("DOMContentLoaded", function() {

    const mapa = document.getElementById("mapa");

    mapa.addEventListener('load', function(){
        const svgDoc = mapa.contentDocument;

        const xml = new XMLHttpRequest();
        xml.open("GET", "nations/1914.xml", true);
        xml.onreadystatechange = function(){
            if(xml.readyState === 4 && xml.status === 200){
                const xmlData = xml.responseXML;

                const nacoes = xmlData.getElementsByTagName("nacao")[0];

                for (let i=0; i< nacoes.lenght; i++){
                const nacao = nacoes[i];

                const nomeNacao = nacoes.getElementsByTagName("nomeNacao")[0].textContent;
                const governoNacao = nacoes.getElementsByTagName("governoNacao")[0].textContent;
                const capitalNacao = nacoes.getElementsByTagName("capialNacao")[0].textContent;
                const bandeiraNacao = nacoes.getElementsByTagName("bandeiraNacao")[0].textContent;

                const bandeira = document.getElementById("bandeira");
                const nome = document.getElementById("nome");
                const governo = document.getElementById("governo");
                const capital = document.getElementById("capital");

                bandeira.src = bandeiraNacao;
                nome = nomeNacao;
                governo = governoNacao;
                capital = capitalNacao;

            }}
        };
        xml.send();
    });
});