const http  = require('http')
const { set, get } = require('../src/basics')
const BE = http.createServer(async(req,res)=>{
    console.log(req.headers.host,"req.url")
    let url = new URL(req.url, 'http://localhost:5000')
    let pathname = url.pathname
    let {} = url.searchParams || {}
    let method = req.method
    console.log("🚀 ~ BE ~ method:", method)

    switch(method){
        case "GET":
            if (pathname?.includes('get')){
                    
                    res.writeHead(200, {'Content-Type':'application/json'}) 
                    res.end(await get("name"))
                    break
            }
        default:
            res.writeHead(200, {'Content-Type':'application/json'}) 
            res.end(JSON.stringify({"name":"BE"}))

    }

})

BE.listen(5000, (res,err)=>{
    console.log(`BE Server Started on http://localhost:5000`)
})