const express = require('express')()

const port = process.env.PORT || 5000

app.get('/hello', (req,res) => {
    res.send('hello world')
}) 

app.listen(port)