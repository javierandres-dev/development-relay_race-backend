import express from 'express'

const server = express()
const port = 4000;

server.listen(port)

console.log(`Server running on port ${port}`)
