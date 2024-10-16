const express = require("express")
const app = express()
app.listen(3000, () => console.log("Serveur demaré"))

//On appel ejs
app.set("view engine", "ejs") //Utilise ejs comme moteur de rendu(templates)
app.set("views", "./pages") //On specifie le dossier où se trouve nos fichiers(pages)


//Nos routes
app.get("/", (req, res) => {
    const phrase = "Une agence professionnelle de developpement."
    res.render("index", {phrase})
})

//On appel les fichiers static aussi
app.use(express.static("public"))

