const express = require('express');
const app = express();
app.use(express.json())

listUsers = [
    {
        nome: "Vinícius",
        id: 1
    },
    {
        nome: "Henrique",
        id: 2
    },
    {
        nome: "Thiago",
        id: 3
    },
]

app.listen(3000, ()=> {
    console.log("Servidor iniciado")
})

app.get('/api/users', (req, res)=> {
    res.send(listUsers)
})

app.get('/api/users/:id', (req, res)=> {
    const id = req.params.id
    const user = listUsers.find(e => e.id == id)
    res.json(user)
})

app.post('/api/users', (req, res)=> {
    const usuario = req.body
    usuario.id = listUsers.length + 1;
    listUsers.push(usuario)
    res.json(usuario)
    console.log(usuario)    
    
})

app.put('/api/users/:id', (req, res) => {
    const usuario = req.body
    const id = req.params.id
    usuario.id = id
    const index = listUsers.findIndex(e => e.id == id)
    listUsers[index] = usuario
    res.json(usuario)
});

app.delete('/api/users/:id', (req, res)=>{
    const id = req.params.id;
    const index = listUsers.findIndex(e => e.id == id)
    listUsers.splice(index, 1)
    res.json(id)
})