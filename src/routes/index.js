import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', { title: '| Home |' }))

router.get('/about', (req, res) => res.render('about', { title: 'Sobre Nosotros' }))

router.get('/calcul', (req, res) => res.render('calcul', { title: 'Calculadora' }))

router.get('/Suma_N_Perfect', (req, res) => res.render('Suma_N_Perfect', { title: 'Calculadora' }))

router.get('/N_Primos', (req, res) => res.render('N_Primos', { title: 'Calculadora' }))


export default router