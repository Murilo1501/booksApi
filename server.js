//import http from 'http'
import app from "./src/app.js"


const PORT = 3000
/*const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"Text/plain"})
    res.end(routes[req.url])
})

*/

app.listen(PORT,() =>{
    console.log('server running at http://localhost:'+PORT)
})
