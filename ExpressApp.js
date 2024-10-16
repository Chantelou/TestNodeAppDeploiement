//Notre app va utiliser express ici

const express = require("express")
const fs = require("fs")
const app = express()
const path = require("path")

//Tableau de données
const Etudiants = require("./Etudiants")


//On demarre le serveur avec express
app.listen(3000, () => console.log("Serveur demarré"))

//On presice le repertoire de nos fichiers static(html, css, js, images, video, audio, etc.)
app.use(express.static("public"))

//Nos routes sans ejs
app.get("/", (req, res) => {
    res.sendFile("./public/index.html", {root: __dirname})
})

app.get("/apropos", (req, res) => {
    res.sendFile("./public/about.html", {root: __dirname})
})

app.get("/contact", (req, res) => {
    res.sendFile("./public/contact.html", {root: __dirname})
})

//Redirection sur le 404 si aucune route n'a été trouvé
app.use((req, res) => {
    res.send(`
        <h1>404 page non trouvé.</h1><br />
        <a href="/">Retour sur la page d'accueil</a>`
    )
})