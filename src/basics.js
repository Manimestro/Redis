const Redis = require('ioredis')

let client
function connect(){
    if(client){
        return client
    }
     client = new Redis(
        {
            host:"127.0.0.1",
            port:6379,
            password:undefined,
            tls:undefined
        }
    )
    return client
}

if( client ){
    client.on("ready",()=>{
        console.log("Redis connection established")
    })
    
    client.on("close",()=>{
        console.log("redis connection closed")
    })
    
    client.on("reconnecting",(o)=>{
        console.log("reconnecting", o)
    })
}
 async function set(key, val){
    let client = connect()
   return  await client.set(key, val)
   // retuns ok 
}

async function startCounter(key, val){
    let client = connect()
   return  await client.set(key, val)
   // retuns ok 
}

async function incrbyfloat(key, val){
    let client = connect()
   return  await client.incrbyfloat(key, val)
   // retuns ok 
}

async function incrby(key, val){
    let client = connect()
   return  await client.incrby(key, val)
   // retuns ok 
}

async function get(key) {
    let client = connect()
 
    let val =  await client.get(key)
    return val
}
module.exports = {set, get, incrby, incrbyfloat}
