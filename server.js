const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index", { text : "This is text data" })
})

const settingsRouter = require('./routes/settings')

app.use("/settings", settingsRouter);

app.listen(3000)