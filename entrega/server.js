const app = require('./src/app');
const porta = 3030; 

app.listen(porta, () =>{
    console.log(`O Servidor esta rodando na http://localhost:${porta}`)
})