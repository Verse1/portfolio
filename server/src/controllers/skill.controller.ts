import express, { Request, Response } from 'express';
import skills from '../models/skills.model';

module.exports = {
  getSkills: async (req: Request, res: Response) => {
    try {
      const allSkills: Array<String> = await skills.find();
      res.status(200).json(allSkills);
    } catch (err) {
      res.status(500).json({
        message: 'Error getting skills',
        error: err,
      });
    }
  },
  addSkill: async (req: Request, res: Response) => {
    const skill = new skills({
      name: req.body.skill,
    });
    try {
      const newSkill = await skill.save();
      res.status(201).json(newSkill);
    } catch (err) {
      res.status(500).json({
        message: 'Error adding skill',
        error: err,
      });
    }
  },
  deleteSkill: async (req: Request, res: Response) => {
    try {
      const deletedSkill = await skills.deleteOne({ _id: req.params.id });
      res.status(200).json(deletedSkill);
    } catch (err) {
      res.status(500).json({
        message: 'Error deleting skill',
        error: err,
      });
    }
  },
  updateSkill: async (req: Request, res: Response) => {
    try {
      const updatedSkill = await skills.updateOne(
        { _id: req.params.id },
        { $set: { skill: req.body.skill } }
      );
      res.status(200).json(updatedSkill);
    } catch (err) {
      res.status(500).json({
        message: 'Error updating skill',
        error: err,
      });
    }
  },
};
