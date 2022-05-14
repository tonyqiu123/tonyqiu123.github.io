const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/views'));

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/projects', (req,res) => {
    res.render('projects')
}) 

app.get('/blog', (req,res) => {
    res.render('blog')
})

app.get('/contact', (req,res) => {
    res.render('contact') 
}) 

app.listen(3000, () => {
    console.log(`server running on ${3000}`)
})