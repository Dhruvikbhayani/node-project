const express = require('express')
const app = express();
const port = 5010
const path = require('path')
const hbs = require('hbs')

const static_path = (path.join(__dirname, "../public"))
const templets_path = (path.join(__dirname, "../templets/views"))
const partials_path = (path.join(__dirname, "../templets/partials"))


// public static path 
app.set('view engine', 'hbs')
app.set('views', templets_path)
app.use(express.static(static_path))
hbs.registerPartials(partials_path)

// Router 

app.get("/", (req, res) => {
    res.render('index')
})
app.get("/weather", (req, res) => {
    res.render('weather')
})
app.get("/about", (req, res) => {
    res.render('about')
})
app.get("*", (req, res) => {
    res.render('404err')
})

app.listen(port, () => {
    console.log(`server is run on port ${port}`)
})