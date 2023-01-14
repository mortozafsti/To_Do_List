const express = require('express');
const ProfileController = require("../controllers/ProfileController");
const ToDoListController  = require('../controllers/TodoListController');
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const router = express.Router();


router.post("/CreateProfile",ProfileController.CreateProfile) 
router.post("/UserLogin",ProfileController.UserLogin) 

router.get("/SelectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile) 
router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile) 


router.post("/CreateTodo",AuthVerifyMiddleware,ToDoListController.CreateTodo) 
router.get("/SelectTodo",AuthVerifyMiddleware,ToDoListController.SelectTodo) 
router.post("/UpdateTodo",AuthVerifyMiddleware,ToDoListController.UpdateTodo) 

router.post("/UpdateStatusTodo",AuthVerifyMiddleware,ToDoListController.UpdateStatusTodo)

router.post("/RemoveToDo",AuthVerifyMiddleware,ToDoListController.RemoveToDo)
router.post("/SelectTodoByStatus",AuthVerifyMiddleware,ToDoListController.SelectTodoByStatus)
router.post("/SelectTodoByDate",AuthVerifyMiddleware,ToDoListController.SelectTodoByDate)



module.exports = router;