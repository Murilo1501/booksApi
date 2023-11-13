import http from 'http'

const PORT = 3000
const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"Text/plain"})
    res.end("Curso de nodeJs")
})

server.listen(PORT,() =>{
    console.log('servidor escutando')
})
