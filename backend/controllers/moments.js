const { validationResult } = require('express-validator');

const Moment = require('../models/moment');
exports.test = async (req, res, next) => {
  try {
  res.send("hello");
    
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.fetchAll = async (req, res, next) => {
  // res.send("hello");
  try {
    const [allMoments] = await Moment.fetchAll();
    res.status(200).json(allMoments);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postMoment = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const title = req.body.title;
  const image = req.body.image;
  const tags = req.body.tags;

  try {
    const moment = {
      title: title,
      tmage: image,
      tags: tags,
    };
    const result = await Moment.save(moment);
    res.status(201).json({ message: 'Moment Created!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteMoment = async (req, res, next) => {
  try {
    const deleteResponse = await Moment.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
