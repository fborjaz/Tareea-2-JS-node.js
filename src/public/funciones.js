class calcu {
    constructor() {
        this.N_Perfect = []
        this.N_Prim = []
        this.BaseX = []
    }

    // Ejercicio 1, Guarda todos los numeros ingresados dentro de un arreglo y solo suma los numeros perfectos los suma y presenta

    sumaDivisores(num) {
        let acu = 0
        for (let divisor = 1; divisor < num; divisor++) {
            if (num % divisor == 0) {
                acu = acu + divisor
            }
        }
        return acu
    }

    perfecto() {
        // capturar
        let num1 = parseInt(document.getElementById('Num').value)
        if (isNaN(num1) || num1 <= 0) {
            document.getElementById("Resp2").textContent = "Por favor ingrese un número mayor que cero."
            return
        }
        let acud = this.sumaDivisores(num1)
        if (acud == num1) {
            this.N_Perfect.push(num1)
            document.getElementById("Resp1").textContent = `${num1} es un número perfecto.`
        } else {
            document.getElementById("Resp2").textContent = `${num1} no es un número perfecto.`
        }
    }

    mostrarPerfectos() {
        if (this.N_Perfect.length == 0) {
            document.getElementById("RespT").textContent = " No se ha ingresado ningún número perfecto."
            return
        }
        let suma = this.N_Perfect.reduce((acc, val) => acc + val)
        document.getElementById("RespT").textContent = `La suma de los números perfectos es: ${suma}`
    }
}

let cal = new calcu()
