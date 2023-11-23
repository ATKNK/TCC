document.addEventListener("DOMContentLoaded", function() {
    var SliderTimeline = document.getElementById("SliderTimeline");
    var AnoSlider = document.getElementById("AnoSlider");
    AnoSlider.innerHTML = SliderTimeline.value;
    
    const ano = document.getElementById("Ano");
    const mapa1914 = document.getElementById("mapa1914");
    const mapa1920 = document.getElementById("mapa1920");
    const mapa1936 = document.getElementById("mapa1936");
    const mapa1939 = document.getElementById("mapa1939");
    const mapa1945 = document.getElementById("mapa1945");

    SliderTimeline.oninput = function(){
        var testevalor = this.value;
        console.log(testevalor);
        if(testevalor==1){
            AnoSlider.innerHTML = "1914";

                mapa1914.style.display = "block";
                mapa1920.style.display = "none";
                mapa1936.style.display = "none";
                mapa1939.style.display = "none";
                mapa1945.style.display = "none";
                ano.innerHTML = "1914"
        }
        else if(testevalor==2){
            AnoSlider.innerHTML = "1920";

                mapa1914.style.display = "none";
                mapa1920.style.display = "block";
                mapa1936.style.display = "none";
                mapa1939.style.display = "none";
                mapa1945.style.display = "none";
                ano.innerHTML = "1920"
        }
        else if(testevalor==3){
            AnoSlider.innerHTML = "1936";
                mapa1914.style.display = "none";
                mapa1920.style.display = "none";
                mapa1936.style.display = "block";
                mapa1939.style.display = "none";
                mapa1945.style.display = "none";
                ano.innerHTML = "1936"
        }
        else if(testevalor==4){
            AnoSlider.innerHTML = "1939";
            mapa1914.style.display = "none";
            mapa1920.style.display = "none";
            mapa1936.style.display = "none";
            mapa1939.style.display = "block";
            mapa1945.style.display = "none";
            ano.innerHTML = "1939"
        }
        else if(testevalor==5){
            AnoSlider.innerHTML = "1945";
            mapa1914.style.display = "none";
            mapa1920.style.display = "none";
            mapa1936.style.display = "none";
            mapa1939.style.display = "none";
            mapa1945.style.display = "block";
            ano.innerHTML = "1945"
        }
    }
});