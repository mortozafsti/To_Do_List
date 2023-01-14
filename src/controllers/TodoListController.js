const TodoListModel = require("../models/TodoListModel");
const jwt = require('jsonwebtoken');


exports.CreateTodo=(req,res)=>{

    let reqBody = req.body;

    let ToDoSubject= reqBody['ToDoSubject']
    let ToDoDescription=reqBody['ToDoDescription']
    let UserName=req.headers['username']
    let TodoStatus="New"
    let ToDoCreateDate=Date.now();
    let ToDoUpdateDate=Date.now();
    let PostBody={
        UserName:UserName,
        ToDoSubject:ToDoSubject,
        ToDoDescription:ToDoDescription,
        ToDoStatus:TodoStatus,
        ToDoCreateDate:ToDoCreateDate,
        ToDoUpdateDate:ToDoUpdateDate

    }

    TodoListModel.create(PostBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    });
}
exports.SelectTodo=(req,res)=>{

    let UserName = req.headers['username']
    TodoListModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })
    
}
exports.UpdateTodo=(req,res)=>{

    let ToDoSubject = req.body['ToDoSubject']
    let ToDoDescription = req.body['ToDoDescription']
    let _id = req.body['_id']
    let ToDoUpdateDate = Date.now();

    let postBody = {
        ToDoSubject:ToDoSubject,
        ToDoDescription:ToDoDescription,
        ToDoUpdateDate:ToDoUpdateDate,
    } 

    TodoListModel.updateOne({_id:_id},{$set:postBody},{upsert:true}, (err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })


}
exports.UpdateStatusTodo=(req,res)=>{

    let ToDoStatus = req.body['ToDoStatus']
    let _id = req.body['_id']
    let ToDoUpdateDate = Date.now();

    let postBody = {
        ToDoStatus:ToDoStatus,
        ToDoUpdateDate:ToDoUpdateDate,
    } 

    TodoListModel.updateOne({_id:_id},{$set:postBody},{upsert:true}, (err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })


}
exports.RemoveToDo=(req,res)=>{

    let _id = req.body['_id']

    TodoListModel.remove({_id:_id},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })


}
exports.SelectTodoByStatus=(req,res)=>{

    let UserName = req.headers['username']
    let ToDoStatus = req.body['ToDoStatus']
    TodoListModel.find({UserName:UserName,ToDoStatus:ToDoStatus},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })
    
}
exports.SelectTodoByDate=(req,res)=>{

    let UserName = req.headers['username']
    let FormDate = req.body['FormDate']
    let ToDate = req.body['ToDate']

    TodoListModel.find({UserName:UserName,ToDoCreateDate:{$gte:new Date(FormDate),$lte: new Date(ToDate)}},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })
    
}