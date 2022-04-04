const express = require('express')
const app = express();
const port = 5010

app.listen(port, () => {
    console.log(`server is run on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("Welcome to Dhruvik page")
})