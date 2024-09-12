const http  = require('http')
const { set, get, incrby, incrbyfloat } = require('../src/basics')
const BE = http.createServer(async(req,res)=>{
    console.log(req.headers.host,"req.url")
    let url = new URL(req.url, 'http://localhost:5000')
    let pathname = url.pathname
    console.log("🚀 ~ BE ~ pathname:", pathname)
    let {} = url.searchParams || {}
    let method = req.method
    console.log("🚀 ~ BE ~ method:", method)

    switch(method){
        case "GET":
            if (pathname === ('/get')){
                    
                    res.writeHead(200, {'Content-Type':'application/json'}) 
                    res.end(await get("name"))
                    break
            }

            if (pathname === ('/counterstart')){
                    
                res.writeHead(200, {'Content-Type':'application/json'}) 
                await set("counter", 0.1)
                res.end(await get("counter"))
                break
        }
        if (pathname === ('/incrby')){
                    
            res.writeHead(200, {'Content-Type':'application/json'}) 
            await incrby("counter", 1)
            res.end(await get("counter"))
            
            break
    }
    if (pathname === ('/incrbyfloat')){
                    
        res.writeHead(200, {'Content-Type':'application/json'}) 
        await incrbyfloat("counter", 1.1)
        res.end(await get("counter"))
        
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