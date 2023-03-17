import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', { title: '| Home |' }))

// router.get('/about', (req, res) => res.render('about', { title: 'Sobre Nosotros' }))

router.get('/calcul', (req, res) => res.render('calcul', { title: 'Calculadora' }))

router.get('/Suma_N_Perfect', (req, res) => res.render('Suma_N_Perfect', { title: 'Suma de perfectos' }))

router.get('/N_Primos', (req, res) => res.render('N_Primos', { title: 'Ver Primos' }))

router.get('/Base_Exponente', (req, res) => res.render('Base_Exponente', { title: 'Base x Exponente' }))

router.get('/Base_Exponente', (req, res) => res.render('Base_Exponente', { title: 'Base x Exponente' }))

router.get('/Multi', (req, res) => res.render('Multi', { title: 'Tabla de multiplicar' }))

router.get('/Numero_Elevado', (req, res) => res.render('Numero_Elevado', { title: 'Numeros elevado' }))

router.get('/Multiplicacion', (req, res) => res.render('Multiplicacion', { title: 'Multiplicacion' }))

router.get('/Arreglo_Divisores', (req, res) => res.render('Arreglo_Divisores', { title: 'Mostrar divisores' }))

router.get('/SumaDivisores', (req, res) => res.render('SumaDivisores', { title: 'Suma de divisores' }))

router.get('/RetornoArreglo', (req, res) => res.render('RetornoArreglo', { title: 'Mostrar arreglo' }))

router.get('/SumadeDigito', (req, res) => res.render('SumadeDigito', { title: 'Suma de digito' }))

router.get('/DigitosPares', (req, res) => res.render('DigitosPares', { title: 'Mostrar Pares' }))

router.get('/PrimerDigito', (req, res) => res.render('PrimerDigito', { title: 'Mostrar 1| digito' }))

router.get('/UltimoDigito', (req, res) => res.render('UltimoDigito', { title: 'Ultimo digito' }))

router.get('/Factorial', (req, res) => res.render('Factorial', { title: 'Ver factorial' }))

router.get('/ArregloFactorial', (req, res) => res.render('ArregloFactorial', { title: 'Factorial de una arreglo' }))

router.get('/RangoNumero', (req, res) => res.render('RangoNumero', { title: 'Rango de un numero' }))

export default router