// dependences
const express = require('express')

//initial configs
const port = 9000
const app = express()





app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
