const express = require('express');

const { body } = require('express-validator');

const momentsController = require('../controllers/moments');

const auth = require('../middleware/auth');

const router = express.Router();
router.get('/test',momentsController.test);
router.get('/', auth, momentsController.fetchAll);

router.post(
  '/',
  [
    body('image').trim().not().isEmpty(),
    body('title').trim().not().isEmpty(),
    body('tags').trim().not().isEmpty(),
  ],
  momentsController.postMoment
);

router.delete('/:id', auth, momentsController.deleteMoment);

module.exports = router;
