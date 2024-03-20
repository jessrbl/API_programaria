const express = require('express') //iniciando o express
const router = express.Router() //configurando a primeira parte da ropa
const { v4: uuidv4 } = require('uuid');

const app = express() //iniciando o app
app.use(express.json())
const porta = 3333 //criando a porta 

//lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },

]

//GET
function mostraMulher(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: 'request.body.nome',
        imagem: 'request.body.imagem',
        minibio: 'request.body.minibio'
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}



//PORTA
function mostraPorta() {
    console.log(`Servidor criado e rodando na porta ${porta}`)
}


app.use(router.get('/mulheres', mostraMulher)) //configurando a rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurando rota POST / mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta