const path  = require('path')
const http  = require('http')
const fs  = require('fs')

let htmlFilePath = path.join(__dirname, 'index.html')

const FE = http.createServer((req,res)=>{


    fs.readFile(htmlFilePath, (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type':'text/plain'});
            res.end('Internal Server Error')
        }else{
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data)
        }
    })
})

FE.listen(4000, ()=>{
    console.log(`Server Started on http://localhost:4000`)
})


