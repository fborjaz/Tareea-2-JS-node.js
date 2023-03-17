class calcu {
    constructor() {
        this.N_Perfect = []
        this.N_Prim = []
        this.BaseX = []
    }

    limpiar() {
        document.getElementById('Num1').value = ""
        document.getElementById('Num2').value = ""
        document.getElementById('Resp1').innerHTML = ""
        document.getElementById('Resp2').innerHTML = ""
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
        let num1 = parseInt(document.getElementById('Num1').value)
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

    // Ejercicio 2, Guarda todos los numeros ingresados dentro de un arreglo y presenta solo los primos 

    isPrimo(num) {
        let acu = 0, divisor = 2, band = 1
        while (divisor < num && band == 1) {
            if (num % divisor == 0) {
                // romper ciclo es cambiar el valor de la bandera
                band = 0
            } else {
                divisor = divisor + 1
            }
        }
        return band
    }

    primo() {
        let d = document
        let num1 = parseInt(d.getElementById('num').value)
        if (isNaN(num1) || num1 <= 0) {
            d.getElementById("Resp2").textContent = "Por favor ingrese un número válido mayor que cero."
            return
        }

        if (this.isPrimo(num1) == 1) {
            this.N_Prim.push(num1)
            d.getElementById("Resp1").textContent = `${num1} es Primo`
        } else {
            d.getElementById("Resp2").textContent = `${num1} no es Primo`
        }
    }

    mostrarPrimo() {
        if (this.N_Prim.length == 0) {
            document.getElementById("mostrar").textContent = "No se ha ingresado ningún número primo."
            return
        }
        let primos = this.N_Prim
        document.getElementById("mostrar").textContent = `Los numeros primos de la serie ingresada son: [${primos}]`
    }

    // Ejercicio 3, Recibe 2 valores una base y un exponente y presenta la base elevada al exponente

    baseXExpo(base, expon) {
        let multi = 1
        for (let i = 0; i < expon; i++) {
            multi *= base
        }
        return multi
    }

    baseXExpooo() {
        let base = parseInt(document.getElementById('num1').value)  // 5
        let expo = parseInt(document.getElementById('num2').value)  // 3

        let multi = this.baseXExpo(base, expo)

        document.getElementById("Resp1").textContent = `${base} elevado a ${expo} es: ${multi}`
    }

    // Ejercicio 4, Dado una serie de numeros presentar los expoentes de la elavacion del mismo numero

    GuardaN() {
        let N = parseInt(document.getElementById('base').value);

        this.BaseX.push(N)

        document.getElementById("Resp1").textContent = `El numero registrar fue ${N}`
    }

    calcularExponente(numero) {
        return Math.pow(numero, numero)
    }

    baseXbaseE() {
        let base = document.getElementById('num1').value.split(",")
        let multi, otro = []


        console.log(base)

        for (let c = 0; c < base.length; c++) {
            let num = this.calcularExponente(base[c])
            console.log(num)
            otro.push(num)
        }

        document.getElementById("RespT").textContent = `el resultado de la base: [${base}] elevada es: [${otro}]`

    }

    // Ejercicio 5, Presentar la tabla de multiplicar de N numero 
    PresentarMulti() {
        let N = document.getElementById("num1").value;
        let multi = 0;
        let tabla = ""

        for (let i = 1; i <= 12; i++) {

            multi = N * i
            tabla += `${N} x ${i} = ${multi} <br> `

        }
        document.getElementById("mostrarr").innerHTML = tabla
    }
    // crea un html para este ejercicio
    // Ejercicio 6, Presentar los divisores de N numeros apartir de un valor inicial

    SacadorDivisores(N) {
        let divisores = [];
        for (let i = 1; i < N; i++) {
            if (N % i === 0) {
                divisores.push(i)
            }
        }
        return divisores;
    }

    PresentarValorU() {
        let N = document.getElementById("Valor").value;
        let ValorI = document.getElementById("ValorInicial").value;
        let Pres = "";
        let divisores = this.SacadorDivisores(N);

        for (let i = ValorI - 1; i < divisores.length; i++) {
            Pres += `${divisores[i]} <br>`;
        }
        document.getElementById("mostrar").innerHTML = Pres;
    }

    // Ejercicio 7, Presentar la suma de los divisores de N numero 

    SumaDEdivisores() {
        let N = document.getElementById("Valor").value;
        let ValorI = document.getElementById("ValorInicial").value;
        let Pres = "", Suma = 0;
        let divisores = this.SacadorDivisores(N);

        for (let i = ValorI - 1; i < divisores.length; i++) {
            Pres += `Los divisores de ${N} son: ${divisores[i]} <br>`;
            Suma += divisores[i];
            console.log(`${Suma}`)

        }
        document.getElementById("mostrar").innerHTML = Pres;
        document.getElementById("mostrar").textContent = `Y la suma de ellos es: ${Suma}`
    }

    // Ejercicio 8, Presentar Digito por Digito de N numeros

    ConvierteDigito(N) {
        let Nums = [], Digito = 0, Ver = 0;
        while (N > 0) {
            Digito = parseInt(N % 10)
            N = parseInt(N / 10)
            Nums.push(Digito)
        }
        return Nums
    }

    DigiXDigi() {
        let N = document.getElementById("N1").value;
        let Ver = 0;

        let Nums = this.ConvierteDigito(N);

        Ver = Nums.reverse()
        document.getElementById("mostrar").textContent = `Los digitos serian ${Ver}`
    }

    // Ejercicio 9, Presenta la suma de todos los digitos dedo por N

    SumaDigitos() {
        let N = document.getElementById("N1").value;
        let ver = 0, suma = 0;

        let Nums = this.ConvierteDigito(N);

        ver = Nums.reverse()

        for (let i = 0; i < ver.length; i++) {
            suma += ver[i]
        }
        document.getElementById("mostrar").textContent = `La suma de los digitos de ${N} es: ${suma}`
    }

    // Ejercicio 10, dada una serie de digitos presentar los numeros que sean pares

    SacarPares(num) {
        let NumPares = []

        for (let i = 0; i < num.length; i++) {
            let N = parseInt(num[i])
            if (N % 2 === 0) {
                NumPares.push(N)
            }
        }
        return NumPares
    }

    NumerosPares() {
        let num1 = document.getElementById('Num').value
        let Par = this.SacarPares(num1)

        document.getElementById("mostrar").textContent = `Los pares de ${num1} son ${Par}`
    }

    // ejercicio 11, dado una serie de digitos presentar el primer digito

    PresesUnoNu() {
        let N = document.getElementById("Num").value;
        let Nums = parseInt(N.toString()[0])

        document.getElementById("mostrar").textContent = `El primer digito es: ${Nums}`
    }

    // ejercicio 12, dado una serie de digitos presentar el primer digito

    PresesUltiNum() {
        let N = document.getElementById("Num").value;

        let Nums = N % 10;

        document.getElementById("mostrar").textContent = `El ultimo digito es: ${Nums}`
    }

    // Ejercicio 13, Realizar una funcion que retorno el factorial de N numero

    SacarFactorial(num) {
        let fact = 1
        for (let i = 1; i <= num; i++) {
            fact = fact * i
        }
        return fact
    }

    Factorial() {
        let N = document.getElementById("Num").value;
        let rest

        rest = this.SacarFactorial(N)

        console.log(rest)

        document.getElementById("mostrar").textContent = `El Factorial de: ${N} es: ${rest}`
    }

    // Ejercicio 14, Realizar una funcion que retorne el factorial de una Serie de N
    ArregloFactorial(){
        let num1 = document.getElementById('Num').value.split(",");
        let factoriales=[]
        
        for(let c=0; c<num1.length; c++){
            factoriales.push(this.SacarFactorial(num1[c]))
        }
        
        document.getElementById("mostrar").textContent = `El Factorial de: ${num1} es: ${factoriales}`

    }

    // Ejercicio 15, Realizar una funcion que retorne el Rango entre dos valores
    InicioFin(){
        let inicial=document.getElementById('Num').value;
        let final=document.getElementById('Num2').value; 
        let numeros=[]
        for (let c = inicial; c < final; c++) {
           numeros.push(c);
          }
          document.getElementById("mostrar").textContent =`El arreglo entre: ${inicial} y ${final} es: ${numeros}`
        }
    }

let cal = new calcu()
