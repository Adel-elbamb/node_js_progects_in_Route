import { Router } from "express";
import {allUser , oneUser , addUser,deleteUser,updataUser,startA_age , allP_U} from './controller/user.controller.js'
const router = Router()


router.get('/user' , allUser)
router.get('/oneuser/:id', oneUser)
router.post('/adduser', addUser)
router.delete('/user/:id' , deleteUser)
router.put ('/user/:id', updataUser)
router.get('/userstartA' , startA_age)
router.get('/allU_P' ,allP_U)

export default router