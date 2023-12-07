// import { error } from "console"
const connection = require("../../../db/connection.js") 


const allP_U = (req,res,next) => {  //get all product with user 
    const query = `SELECT p.name AS productName , p.price , p.createdBy , u.name AS UserName ,  u.email , u.pass
    FROM products AS p INNER JOIN users AS u  on p.createdBy = u.id  `
    connection.execute(query , (error , result ) => {
        if(error) {
            return res.json({message : " query errorr " , error })
        }
        return res.json({message : "done " , result })
    })

}

const oneProduct = (req,res,next) => {       //  get one product 
    const {id} = req.params 
    const query =  `SELECT p.name AS productName , p.price , p.createdBy , u.name AS UserName ,  u.email , u.pass
    FROM products AS p INNER JOIN users AS u  on p.createdBy = u.id   WHERE  p.id = ${id} `
    connection.execute(query , (error , result ) => {
        if(error ) {

            return res.json({message : " query error " , error })
        }
        if(result.lenght) {
            return res.json({message : "done" , result})
        }
        return res.json({message : " invalid id "})
    })
}

const addProduct = (req,res,next) => {   // add product 
    const {name , description , price , createdBy} = req.body
        const query = `INSERT INTO products (name , description , price , createdBy) VALUES 
        ('${name}', '${description }' , '${price}', ${createdBy})`
        connection.execute(query , (error , result ) => {
            if(error) {
                if (error.errno = 1425) {
                    return res.json({message : " in valild user id "  })
                }
            }
            return result.affectedRows? res.json({message : "done " , result }): res.json({message : "query error " , error})
        })


}

const updateProduct = (req,res,next) => {  // update product 
    const {id} = req.params
    const {name , description , price , createdBy} = req.body
    const query = `UPDATE products SET name = '${name} ', description = '${description}' , price = ${price} `
    connection.execute(query , (error , result ) => {
        if(error) {
            return res.json({message : "query error " , error })
        }
        return result.affectedRows? res.json({message : "done " , result }): res.json({message : "invalid id " , error})
      
    })
}

const deleteProduct  = (req,res,next) =>  {  //delete product 
       const {id} = req.params 
       const query = `DELETE  FROM products WHERE id = ${id}`
       connection.execute(query , (error , result ) => {
        if(error) {
            return res.json({message : "query error " , error })
        }
        return result.affectedRows? res.json({message : "done " , result }): res.json({message : "invalid id " , error})
      
       })
}

  const priceProduct = (req , res ,next ) => {  //price greater than 3000
      const query = `SELECT * FROM  products where price > 3000`
      connection.execute(query ,(error , result) => {
        if(error) {
            return res.json({message : 'query error ' ,error})
        }
     
        return res.json({message : "done" , result})
      })
  }

  const allProduct = (req,res,next) => { // all product 
    const query = `SELECT * FROM products `
    connection.execute(query , (error , result ) => {
        if(error) {
            return res.json({message : " query errorr " , error })
        }
        return res.json({message : "done " , result })

    })
  }

module.exports = { allP_U, oneProduct,addProduct ,updateProduct , deleteProduct ,priceProduct ,allProduct}