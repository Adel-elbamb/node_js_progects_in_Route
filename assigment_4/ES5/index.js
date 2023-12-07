const  express =require( 'express')
const  bootstrap = require( './src/bootstrap.js')
const app = express()
const port = 4000

bootstrap(app ,express)


app.listen(port , () => {
    console.log(`server runing now .......... ${port}`)
})