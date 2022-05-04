const express = require('express')
const app = express()
const port = process.env.port || 5154


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.listen(port, () => {
    console.log(`server is run ${port}`)
})