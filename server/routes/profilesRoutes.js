const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");
const Trainings = mongoose.model("trainings");

const profileRoutes = (app) => {
  app.get(`/api/profile`, async (req, res) => {
    const profiles = await Profile.find();

    return res.status(200).send(profiles);
  });

  app.get(`/api/trainings`, async (req, res) => {
    const trainings = await Trainings.find();

    return res.status(200).send(trainings);
  });

  app.post(`/api/profile`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      error: false,
      message: "Thank you for posting this",
      profile,
    });
  });

  app.put(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profileRoutes;
