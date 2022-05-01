const mongoose = require("mongoose");
const { Schema } = mongoose;


//create Schema and Model

const profileSchema = new Schema({
  user_id: String,
  first_name: String,
  last_name: String,
  age: Number, 
  contact: String,
  address: String,
  postcode: String,
  email_adresss: String,
  login_id: String,
  workout: [String],
  track_goal: [{level: Number, date: String}],
  videoUrl:String
});

const trainingSchema = new Schema({
videoUrl: String,
title: String,
level: String,
duration: String, 
date: String

})

mongoose.model("profiles", profileSchema);
mongoose.model("trainings", trainingSchema);

  