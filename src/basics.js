const Redis = require('ioredis')

const redis = new Redis(
    {
        host:"127.0.0.1",
        post:6379
    }
)

 async function set(key, val){
   return  await redis.set(key, val)
   // retuns ok 
}

async function get(key) {
    return await redis.get(key)
}
module.exports = {set, get}
