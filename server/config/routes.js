const mongoose = require("mongoose");
const tasks = require("../controllers/tasks");

module.exports = function (app) {
    app.get("/tasks", tasks.index);
    app.post("/tasks", tasks.new);
    app.get("/tasks/:id", tasks.show);
    app.put("/tasks/:id", tasks.update);
    app.post("/tasks/delete/:id", tasks.remove);
}