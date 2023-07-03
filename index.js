const express = require('express')
const session = require ('express-session')

const port = 1080;
var path = require ('path')
const app = express ();

app.use(session({secret:'aklsjdhdklashkdjlash12'}));

app.engine('html', require ('ejs').renderFile);
app.set('view engine', 'html');
app.use ('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res)=>{
    res.render('entrar.html')   

})

app.listen(port,()=>{
console.log('servidor rodando')
})
