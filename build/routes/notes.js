const express = require('express');
const { body } = require('express-validator');
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
} = require('../controllers/notesController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/search', searchNotes);

router.get('/', getNotes);
router.get('/:id', getNote);

router.post(
  '/',
  [body('title').trim().notEmpty().withMessage('Title is required')],
  createNote
);

router.put(
  '/:id',
  [body('title').trim().notEmpty().withMessage('Title is required')],
  updateNote
);

router.delete('/:id', deleteNote);

module.exports = router;
