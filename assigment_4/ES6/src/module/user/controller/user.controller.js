import connection from './../../../db/connection.js'

const allUser = (req , res ,next) => {  // all user 
    const query = `SELECT * FROM users`
    connection.execute(query , (error , result) => {
        if(error){  return res.json({message : " query eror " , error })
    }
    return res.json({message : " done " , "users" : result })
    
    })
   
}

const oneUser = (req,res,next) =>{      //  search for users by list of ids => using IN 
    const {id} = req.params
    const query = `SELECT * FROM users WHERE id = ${id}`
    connection.execute(query , (error , result) => {
           if (error) {
            return res.json({message : "error in query" , error})
           }
           if(result.length) {
            return res.json({message :"done " , "result" : result.length})
           
           }
           return res.json({message : " invalid id "})
       
        
    })
}

const addUser  = (req , res , next) => {  //add user 
    const {name ,email ,pass , age }  = req.body
    const selectQuery = `SELECT email FROM users WHERE   email = '${email}'`
    connection.execute(selectQuery , (error , result) => {
        if (error) {
            return res.json({message : " select query error "})
        } 
        if(result.length) {
            return res.json({message: "email alredy exist "})
        } 
        const query = `INSERT INTO users (name,email,pass,age) VALUES('${name}', '${email}', '${pass}' , ${age})`
        connection.execute(query , (error , result ) => {
            if(error) {
                return res.json({message : "query error " , error })

            }
            return result.affectedRows? res.json({massage : "done" , result}) : res.json({massage : " error invalid "})
        })
    })
}


const deleteUser = (req,res,next) => {  // delete user 
      const {id} = req.params
    const query = `DELETE FROM users WHERE id = ${id}`
    connection.execute(query,(error,result) =>{
        if(error) {
            res.json({message : "query error " , error})
        }
        return result.affectedRows? res.json({massage : "done" , result}) : res.json({massage : " error invalid id  "})

    })
}

const updataUser = (req,res,next) => {   // update user 
    const {id} = req.params  
    const {name , email} = req.body 
    const query = `UPDATE users SET name = '${name}' , email = '${email}' WHERE id = ${id}`
    connection.execute(query , (error , result) => {
        if(error) {
            return res.json({message : " query error " , error })

        }
        return result.affectedRows?res.json({message : " done " , result}): res.json({message : "invalid id error "})
    })
}

const startA_age = (req,res,next) => { //search for user where his name start with "a" and age less than 30 => using like for characters
    const query = `SELECT * FROM users WHERE name LIKE 'a%' AND age < 30`
    connection.execute(query , (error , result) => {
        if(error){  return res.json({message : " query eror " , error })
    }
    return res.json({message : " done " , "users" : result })
    
    })
}

const allP_U = (req,res,next) => {  //get all user  with product  
    const query = `SELECT p.name AS productName , p.price , p.createdBy , u.name AS UserName ,  u.email , u.pass
    FROM products AS p INNER JOIN users AS u  on p.createdBy = u.id  `
    connection.execute(query , (error , result ) => {
        if(error) {
            return res.json({message : " query errorr " , error })
        }
        return res.json({message : "done " , result })
    })

}


export { allUser , oneUser ,addUser,deleteUser ,updataUser ,startA_age ,allP_U}