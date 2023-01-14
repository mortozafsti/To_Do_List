const mongoose = require('mongoose');

const DataScema = mongoose.Schema({

    UserName:{type:String},
    ToDoSubject:{type:String},
    ToDoDescription:{type:String}, 
    ToDoStatus:{type:String},
    ToDoCreateDate:{type:Date},
    ToDoUpdateDate:{type:Date}
    
}, {versionKey:false});

const TodoListModel = mongoose.model('List',DataScema)

module.exports = TodoListModel