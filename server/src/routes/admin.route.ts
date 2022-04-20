const adminRouter = require('express').Router();
const skillController = require('../controllers/skill.controller');

adminRouter.get('/skills', skillController.getSkills);
adminRouter.post('/skills', skillController.addSkill);
adminRouter.delete('/skills/:id', skillController.deleteSkill);
adminRouter.put('/skills/:id', skillController.updateSkill);

module.exports = adminRouter;
