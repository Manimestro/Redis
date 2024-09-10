const Redis = require('ioredis')

function connect(){
    const client = new Redis(
        {
            host:"127.0.0.1",
            port:6379,
            password:undefined,
            tls:undefined
        }
    )
    return client
}



 async function set(key, val){
    let client = connect()
   return  await client.set(key, val)
   // retuns ok 
}

async function get(key) {
    let client = connect()
    client.on("ready",()=>{
        console.log("Redis connection established")
    })
    
    client.on("close",()=>{
        console.log("redis connection closed")
    })
    
    client.on("reconnecting",(o)=>{
        console.log("reconnecting", o)
    })
    let val =  await client.get(key)
    client.quit()
    return val
}
module.exports = {set, get}
