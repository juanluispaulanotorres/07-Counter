
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

    let countValue = document.getElementById("valores");
    let result = {count: false, countUp: false, value: 0, speed: 1000, step: 1};

    countValue.innerHTML = cont.innerText;
    countValue.innerHTML += " " + JSON.stringify(result);

    txtSet.addEventListener('change', function() {
        // Comprobar "Set to"
        if (txtSet.value == "") {
            contador.setCont(0);
        } else {
            contador.setCont(parseInt(txtSet.value));
        }
        cont.innerHTML = contador.getCont();
        result.value = contador.getCont();
    })

    txtStep.addEventListener('change', function() {
        contador.setStep(parseInt(txtStep.value));
    })

    // Inicio
    btnStart.addEventListener('click', function() {

        interval = setInterval (function() {

            // Comprobar "Step"
            if (txtStep.value == "") {
                contador.setStep(1);
            } else {
                contador.setStep(parseInt(txtStep.value));
                result.step = contador.getStep();
            }

            cont.innerHTML = contador.incrementar();
            result.count = true;
            result.countUp = true;
            countValue.innerHTML = cont.innerText;
            countValue.innerHTML += " " + JSON.stringify(result);

        }, 1000);

    })

    btnUp.addEventListener("click", function() {
        stopSecuence(interval);

        interval = setInterval (function() {

            if (txtStep.value == "") {
                contador.setStep(1);
            } else {
                contador.setStep(parseInt(txtStep.value));
                result.step = contador.getStep();
            }

            cont.innerHTML = contador.incrementar();
            result.countUp = true;
            countValue.innerHTML = cont.innerText;
            countValue.innerHTML += " " + JSON.stringify(result);

        }, 1000);
    })

    // Cuenta atrás
    btnDown.addEventListener("click", function() {
        stopSecuence(interval);
        interval = setInterval ( function() {

            if (txtStep.value == "") {
                contador.setStep(1);
            } else {
                contador.setStep(parseInt(txtStep.value));
                result.step = contador.getStep();
            }

            cont.innerHTML = contador.decrementar();
            result.countUp = false;
            countValue.innerHTML = cont.innerText;
            countValue.innerHTML += " " + JSON.stringify(result);

        }, 1000);
    })

    btnPause.addEventListener('click', function() {
        result.count = false;
        countValue.innerHTML = cont.innerText;
        countValue.innerHTML += " " + JSON.stringify(result);
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