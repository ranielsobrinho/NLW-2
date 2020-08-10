const proffys = [

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {filters, proffys, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

//configurar o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express : server,
    noCache : true,
})

server.use(express.static("public")) //configurar arquivos estáticos

.get('/', pageLanding)

.get('/study', pageStudy)

.get('/give-classes', pageGiveClasses)

.listen(5500)