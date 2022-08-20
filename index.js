const express = require('express')

const app = express()

const path =require('path')

app.listen(8080, () => {
    console.log('aplicación corriendo en el puerto 8080')
})

app.get('/', (request,response)=> {
    response.send('Paginas estaticas corriendo');
});

app.get('/examen', (request, response) =>{
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/curriculum', (request, response) =>{
    response.sendFile(path.resolve(__dirname, 'index2.html'))
})


