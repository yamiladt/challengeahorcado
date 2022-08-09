var botonJugar = document.querySelector("#jugar");
var botonRestart = document.querySelector("#nva-palabra");

var randomWord = ["ALAS","ARBOL","ACARICIAR","APARATO","BOCA","BEBER","BORRACHO","BAILAR","CASAMIENTO","CARCEL","CASCANUECES","CRISTALINO","DEDAL","DOCTRINA","DESEMPOLVAR","DESCENSO","ELEFANTE","EGOISMO","EMPATICO","ENCARAR","FILANTROPO","FALOPIO","FELICIDAD","FALAFEL","GARAGE","GARGANTA","GRANULADO","GRANDEZA","HISOTOPO","HIELO","HELICOPTERO","HELICE","INCENDIAR","INCREMENTAR","INALCANZABLE","IMAGINACION","JUSTICIA","JUSTIFICAR","JARAMILLO","JAULA","KILOMETROS","KILOS","KAMALEON","KAMBOYA","KAVAK","MANTENER","MANIFESTAR","MENOSPRECIAR","MILANESA","MICROSCOPIO","NEFASTO","NEONATOLOGIA","NATIVIDAD","NEGACION","LEVANTARSE","LEVITACION","LINASA","LEONIDAS","OPORTUNISTA","OBSESION","OPTUSO","OMITIR","PATRIMONIO","PATRICIO","PAPELERIO","PINCELAR","QUESERIA","QUINOA","QUIENES","QUIMICA","RECTIFICAR","REMODELAR","REESTRUCTURAR","REINCIDIR","SUSTENTABILIDAD","SUSTANCIA","SEGUIMIENTO","SERVIR","TRANSMITIR","TRANSPORTAR","TRIGONOMETRIA","TIROLEZA","USURPACION","UNICELULAR","UNION","USTEDES","VALORACION","VICERAL","VINCULACION","VICTIMA","WISCONSI","WILLIANS","WHITE","WINDOWS","YAMILA","YAGMUR","YUGOSLAVIA","ZAPATO","ZORZAL","ZAPATILLA","ZOOTOPIA"];

var palabraAdivinar;
var palabraArray;
var letrasUsadas = [1];
var palabra_Inner = document.querySelector("#palabraInner");
var letras_Inner = document.querySelector("#letras-usadas");
var intentos;
var nroLetras;
var guiones;
var guiones_act;
var resultado = document.querySelector("#resultado");


var filter = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var teclaPulsada = document.querySelector("html");
var tecla;
var cambio;

botonJugar.addEventListener("click", function(){
    start(randomWord[Math.floor(Math.random() * randomWord.length)]);
});

botonRestart.addEventListener("click", function(){
    start(randomWord[Math.floor(Math.random() * randomWord.length)]);    
});


teclaPulsada.addEventListener("keydown", function(event){
    
    tecla = event.key.toUpperCase();
    console.log(tecla);
    if(filter.includes(tecla)){
        if(buscarLetra(tecla)){
            if(checkLetrasUsadas(tecla)){
            nroLetras = nroLetras + cambio;
            }
            console.log(nroLetras);
            if(nroLetras == 8){
                alert("Felicidades!");
                resultado.innerHTML = "Felicidades! Ganaste!!";
                return;
            }
        }else{
            if(checkLetrasUsadas(tecla)){                
                intentos--; 
                dibujoJuego(intentos);               
            }
            console.log("Intentos restantes: " + intentos);           
            if(intentos == 0){
                alert("Perdiste ahorcado!");
                resultado.innerHTML = "Buen Intento! Perdiste!";
                return;
            }
        }

    }
});

function checkLetrasUsadas(key){
    if(!letrasUsadas.includes(key)){
        letrasUsadas.push(key);
        letras_Inner.innerHTML = letrasUsadas;
        return true;
    }
    return false;
}

function buscarLetra(key){
    cambio = 0;
    for(var i = 0; i < palabraArray.length; i++){
        if(palabraArray[i] == key){
            guiones_act[i] = key;
            console.log(guiones_act);
            palabra_Inner.innerHTML = guiones_act.join(" ");
            cambio++;
        }
    }
    if(cambio == 0){
        return false;
    }else{
        return true;
    }
}

function start(palabra){
    limpiar();
    dibujarBaseHorca();
    guiones = ["_","_","_","_","_","_","_","_"];
    letrasUsadas.length = 0;
    guiones_act = guiones;
    intentos = 8;
    nroLetras = 0;
    resultado.innerHTML = "";
    palabraAdivinar = palabra;
    palabraArray = palabraAdivinar.split("");
    palabra_Inner.innerHTML = palabra_Inner.innerHTML.replace(palabra_Inner.innerHTML, guiones_act.join(" "));
    letras_Inner.innerHTML = letras_Inner.innerHTML.replace(letras_Inner.innerHTML,"");
    console.log(palabraArray);
    console.log(palabraArray.join(""));
}