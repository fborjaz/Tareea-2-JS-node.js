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

export default router