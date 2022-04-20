const monogoose = require('mongoose');
const Schema = monogoose.Schema;

const skillsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const skills = monogoose.model('Skill', skillsSchema);

export default skills;
