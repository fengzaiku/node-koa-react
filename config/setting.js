
import { createWriteStream } from 'fs'
import createLogger from 'concurrency-logger'
 
export const logger = createLogger({
    timestamp: true,
    reporter:createWriteStream('public/logs/requests.log',{flags:"a"})
});


