
import { Contador } from "./Contador.js";

window.addEventListener('load', function() {

    let cont = document.getElementById("cont");
    let contador = new Contador(parseInt(cont.innerText));
    let interval;

    // Botones (estado)
    let btnStart = document.getElementById("start");
    let btnPause = document.getElementById("pause");
    let btnReset = document.getElementById("reset");

    // Botones (control de la secuencia)
    let btnUp = document.getElementById("up");
    let btnDown = document.getElementById("down");

    // Inputs
    let txtSet = this.document.getElementById("set");
    let txtStep = this.document.getElementById("step");


    txtSet.addEventListener('change', function() {
        // Comprobar "Set to"
        if (txtSet.value == "") {
            contador.setCont(0);
            cont.innerHTML = contador.getCont();
        } else {
            contador.setCont(parseInt(txtSet.value));
            cont.innerHTML = contador.getCont();
        }
    })


    txtStep.addEventListener('change', function() {
        contador.setStep(parseInt(txtStep.value));
    })

    btnStart.addEventListener('click', function() {
        interval = setInterval (function() {

            // Comprobar "Step"
            if (txtStep.value == "") {
                contador.setStep(1);
            } else {
                contador.setStep(parseInt(txtStep.value));
            }

            cont.innerHTML = contador.incrementar();

        }, 1000);

    })

    btnUp.addEventListener("click", function() {
        stopSecuence(interval);

        interval = setInterval (function() {

            if (txtStep.value == "") {
                contador.setStep(1);
            } else {
                contador.setStep(parseInt(txtStep.value));
            }

            cont.innerHTML = contador.incrementar();
        }, 1000);
    })

    btnDown.addEventListener("click", function() {
        stopSecuence(interval);
        interval = setInterval ( function() {

            if (txtStep.value == "") {
                contador.setStep(1);
            } else {
                contador.setStep(parseInt(txtStep.value));
            }

            cont.innerHTML = contador.decrementar();
        }, 1000);
    })

    btnPause.addEventListener('click', function() {      
        stopSecuence(interval);
    })

    btnReset.addEventListener('click', function() {
        contador.setCont(0);
        cont.innerHTML = contador.getCont();
    })

    function stopSecuence(interval) {
        clearInterval(interval);
    }

})