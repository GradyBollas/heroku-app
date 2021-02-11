const dotenv = require("dotenv").config()

const express = require("express")

const cors = require("cors")

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/*", (_,res) => {
    res.json({data: "the API LIVES!!!"})
})

app.listen(port, () => {
    console.log(`It got on in a flash on port ${port}`)
})

