//Ici on utilise pas express juste du node pur

const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")

    //Pour recupérer les url de nos routes(nos pages)
    let routes = (req.url === "/") ? "./docs/index.html"
        : (req.url === "/apropos") ? "./docs/about.html"
            : (req.url === "/contact") ? "./docs/contact.html"
                : "404"

    //On lit les chemins de nos routes
    fs.readFile(routes, (err, data) => {
        if (err) res.end("Page non trouvé")
        else {
            console.log("Page trouver et chargé sur le navigateur")
            res.end(data)
        }
    })

}).listen(3000, () => console.log("Serveur demarrer sur le port 3000"))