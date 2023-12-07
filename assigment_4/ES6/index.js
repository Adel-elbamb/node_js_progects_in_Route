import express from 'express'
import bootstrap from './src/bootstrap.js'
const app = express()
const port = 4000

bootstrap(app ,express)
app.listen(port , () => {
    console.log(`server runing now .......... ${port}`)
})