const adminRouter = require('express').Router();
const skillController = require('../controllers/skill.controller');
const userControllerr = require('../controllers/users.controller');

adminRouter.get('/skills', skillController.getSkills);
adminRouter.post('/skills', skillController.addSkill);
adminRouter.delete('/skills/:id', skillController.deleteSkill);
adminRouter.put('/skills/:id', skillController.updateSkill);

adminRouter.get('/users', userControllerr.getUsers);
adminRouter.delete('/users/:id', userControllerr.deleteUser);

module.exports = adminRouter;
