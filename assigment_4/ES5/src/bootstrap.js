const userRouter = require('./module/user/user.router.js')
 const productRouter = require('./module/product/product.router.js')

function bootstrap (app ,express) {
    app.use(express.json())
    app.use(userRouter)
     app.use(productRouter)
}

module.exports = bootstrap