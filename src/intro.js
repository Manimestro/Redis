/*
    Redis is a in-memory database (writes in disk in batches to persists the data that we need)
    Redis is no-sql key-value data store

    offers these types of softwares
        1. redis community  (open source software)
        2. redis stack (open source with modules added)
        3. redis Enterprice software (self manage)
            1. redis modules
            2. supports multi region sahrding and replication 
            3. redis on flash 
        2. redis cloud (enterprise auto manage)

    !Redis Client:
        Redis client an lib to talk with redis database server 
        1. redis client will manage connection config and distorying , pooling 
           it uses tcp sockets to connect 
        2. redis client will use a specific protocal/language to communicate with redis 
        3. redis client have langauge specific apis and mapping redis key-val store data to language specific data types

        community recommended clients for nodejs 
        1. ioredis
        2. node redis
    ! Connection Pooling 
        in a multi-threaded programing model, connections can established with multiple threads
        to avoid multiple connections making to redis again and again 
        we keep a group/pool of open connections to connect 
        this is called collection pooling 
        
        since node js (single threaded model) it can use a single client and operations are done with async model

*/