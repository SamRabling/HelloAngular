const mongoose = require("mongoose");
const Task = mongoose.model("task");

module.exports = {
    index: function (req, res) {
        Task.find({}, function (err, task) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ data: task });
            }
        });
    },

    new: function (req, res) {
        console.log("post data");
        var task = new Task({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        });
        task.save(function (err) {
            if (err) {
                res.json({status: false});
            } else {
                res.json({ status: true, data: task });
            }
        });
    },

    show: function (req, res, err) {
        var id = req.params.id
        Task.findOne({ _id: id }, function (err, task) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: task });
            }
        });
    },

    update: function (req, res, err) {
        var id = req.params.id
        Task.findById({ _id: id }, function (err, task) {
            if (err) {
                res.json({ status: false });
            } else {
                task.title = req.body.title,
                task.description = req.body.description,
                task.completed = req.body.completed
                task.save(function (err, updatedTask){
                    if(err){
                        res.json({ status: false });
                    }
                    else{
                        res.json({ status: true, updatedTask });
                    }
                });
                
            }
        });
    },

    remove: function (req, res, err) {
        var id = req.params.id
        Task.findByIdAndRemove({ _id: id }, function (err, task) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true });
            }
        });
    }

}