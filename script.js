listenMouseOver();
setInitialValues();

function setInitialValues() {
    puntos = 0;
    tiempo = 60;
    necesarios = 30;
}

function listenMouseOver() {
    document.getElementById("player").addEventListener("mouseover", sumarPuntos);
}

function removeListenMouseOver() {
    document.getElementById("player").removeEventListener("mouseover", sumarPuntos);
}

function playAgain() {
    setInitialValues();
    listenMouseOver();

}


function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos : <b>" + puntos + "/" + necesarios + "  </b>";
    randNum = Math.round(Math.random() * 440);
    randNum2 = Math.round(Math.random() * 440);
    console.log(randNum, randNum2);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == 30) {
        tiempo = 0;
        puntos = 0;
        alert("Felicitaciones, has ganado!")
        removeListenMouseOver();
        document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;

    }
}

function restarTiempo() {
    if (tiempo > 0) {
        tiempo--
        document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
        if (tiempo == 0) {
            alert("Perdiste, buen intento");
            tiempo = 0;
            puntos = 0;
            tiempo = 0;
        }
    }

}


window.onload = function() {
    document.getElementById("button").addEventListener("click", playAgain);
}


setInterval(restarTiempo, 1000);