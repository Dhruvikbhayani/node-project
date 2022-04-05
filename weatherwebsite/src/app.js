const express = require('express')
const app = express();
const port = 5010
const path = require('path')

// public static path 

const static_path = (path.join(__dirname, "../public"))
app.use(express.static(static_path))
    // Router 

app.get("/", (req, res) => {
    res.send("Welcome to Dhruvik page")
})
app.get("/weather", (req, res) => {
    res.send("Welcome to Dhruvik page")
})
app.get("/about", (req, res) => {
    res.send("Welcome to Dhruvik page")
})







app.listen(port, () => {
    console.log(`server is run on port ${port}`)
})