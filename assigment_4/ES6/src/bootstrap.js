import userRouter from './module/user/user.router.js'
import productRouter from './module/proudect/product.router.js'

function bootstrap (app ,express) {
    app.use(express.json())
    app.use(userRouter)
    app.use(productRouter)
}

export default bootstrap 