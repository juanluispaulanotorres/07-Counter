export class Contador {
    cont = 0;
    step = 1;

    constructor(contador) {
        this.cont = contador;
    }

    getCont() {
        return this.cont;
    }

    setCont(contador) {
        this.cont = contador;
    }

    getStep() {
        return this.step;
    }

    setStep(step) {
        this.step = step;
    }

    incrementar() {
        this.cont += this.step;
        return this.cont;
    }

    decrementar() {
        this.cont -= this.step;
        return this.cont;
    }

}