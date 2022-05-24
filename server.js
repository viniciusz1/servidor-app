const express = require('express')
const app = express();
const port = 3000;
app.use(express.json()) // por padrao o express não aceita json


app.use(function(req, res, next) {
    console.log(req.originalUrl)
    next();
})

const listaPessoas = [
    { 
        id: 1,
        nome: 'João',
    },
    { 
        id: 2,
        nome: 'Maria',
    },
    { 
        id: 3,
        nome: 'José',
    },
]

// get -> Buscar informaçõs // req.query
// post -> criar informações // req.body
// put -> alterar informações ;// req.body
// delete - > deletar informações // req.params

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/api/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa)
});

app.put('/api/pessoas/:id', (req, res) =>{
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
    res.json(pessoa);
})

app.get('/api/pessoas/:id', (req, res) =>{
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.json(pessoa)
})

app.delete('/api/pessoas/:id', (req, res) =>{
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    res.json(pessoa);
})

app.get('/home', (req, res) => {
    res.send('Hello World Home')
})
app.get('/api/pessoas', (req, res) => {   
     
    res.json(listaPessoas)
})
app.listen(port, () => {
    console.log("example app listening at https://localhost:3000")
})