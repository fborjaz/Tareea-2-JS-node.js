import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', { title: '| Home |' }))

router.get('/about', (req, res) => res.render('about', { title: 'Sobre Nosotros' }))

router.get('/calcul', (req, res) => res.render('calcul', { title: 'Calculadora' }))

router.get('/Suma_N_Perfect', (req, res) => res.render('Suma_N_Perfect', { title: 'Calculadora' }))

router.get('/N_Primos', (req, res) => res.render('N_Primos', { title: 'Calculadora' }))

router.get('/Base_Exponente', (req, res) => res.render('Base_Exponente', { title: 'Calculadora' }))

router.get('/Base_Exponente', (req, res) => res.render('Base_Exponente', { title: 'Calculadora' }))

router.get('/Multi', (req, res) => res.render('Multi', { title: 'Calculadora' }))

router.get('/Numero_Elevado', (req, res) => res.render('Numero_Elevado', { title: 'Calculadora' }))

router.get('/Multiplicacion', (req, res) => res.render('Multiplicacion', { title: 'Calculadora' }))

router.get('/Arreglo_Divisores', (req, res) => res.render('Arreglo_Divisores', { title: 'Calculadora' }))

router.get('/SumaDivisores', (req, res) => res.render('SumaDivisores', { title: 'Calculadora' }))

router.get('/RetornoArreglo', (req, res) => res.render('RetornoArreglo', { title: 'Calculadora' }))

router.get('/SumadeDigito', (req, res) => res.render('SumadeDigito', { title: 'Calculadora' }))

router.get('/DigitosPares', (req, res) => res.render('DigitosPares', { title: 'Calculadora' }))

router.get('/PrimerDigito', (req, res) => res.render('PrimerDigito', { title: 'Calculadora' }))

router.get('/UltimoDigito', (req, res) => res.render('UltimoDigito', { title: 'Calculadora' }))

router.get('/Factorial', (req, res) => res.render('Factorial', { title: 'Calculadora' }))

router.get('/ArregloFactorial', (req, res) => res.render('ArregloFactorial', { title: 'Calculadora' }))

router.get('/RangoNumero', (req, res) => res.render('RangoNumero', { title: 'Calculadora' }))

export default router