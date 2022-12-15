const express = require('express')
const router = express.Router()

const routeapp = express()

routeapp.set('view engine', 'ejs')

router.get('/', (req, res) => {
    console.log("Settings")
    res.render("settings")
})

module.exports = router