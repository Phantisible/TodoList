const task = require("../models/task");

exports.getTask = (req, res) =>{ 
    if(req.session.uuid){
        task.model.findAll({
            where:{ account_uuid: req.session.uuid
            }
        }).then(tasks =>{
            req.session.tasks = tasks;
            if(tasks){
                res.render("taskList",{username: req.session.username,uuid: req.session.uuid, tasks:req.session.tasks,loggedIn:req.session.loggedIn});
            }
        })
    }else{
        res.redirect("/home");
    }
}

exports.makeTask = (req, res) =>{
    if(req.session.uuid){
        res.render("createTask",{username: req.session.username,uuid: req.session.uuid, tasks:req.session.tasks,loggedIn:req.session.loggedIn});
    }else{
        res.redirect("/home");
    }
}

exports.createTask = async (req, res) => {

    if(req.session.uuid){
        let result = await task.model.create({
            account_uuid: req.session.uuid, 
            task_name: req.query.task,
            description: req.query.desc,
            status: "pending"
        })
        if(!result){
            res.render("/createTask",{username: req.session.username,uuid: req.session.uuid, tasks:req.session.tasks,loggedIn:req.session.loggedIn});
        }else{
            res.redirect("/taskList");
        }
    }else{
        res.redirect("/home");
    }
}

exports.updateTask = async (req, res) => {   

    if(req.session.uuid){
        let result = await task.model.update({status:"completed"} ,
        {
            where:{
                id: req.query.id
            }
        })
        if(!result){

        }else{
            res.redirect("/taskList");
        }
    }else{
        res.redirect("/home");
    }
}

exports.deleteTask = async (req, res) => {
    if(req.session.uuid){
        await task.model.destroy({
            where: {
                id: req.query.id
            }
        }).then(result => {
            if(result){
                res.redirect("/taskList");
            }else{
                res.redirect("/taskList");
            }
        })
    }else{
        res.redirect("/home");
    }
}