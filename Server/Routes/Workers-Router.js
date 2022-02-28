const officeRouter =  require("express").Router() ;
const workerControllers = require("../Controllers/Workers-Controller");
const { getAll , getById ,  addWorker , updateWorker ,  deleteWorker } = workerControllers

officeRouter.get("/" , getAll)

officeRouter.get("/:id" , getById)

officeRouter.post("/" , addWorker)

officeRouter.put("/:id" , updateWorker)

officeRouter.delete("/:id" , deleteWorker)

module.exports = officeRouter;