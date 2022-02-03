const express = require('express')

const NoteCtrl = require('../controllers/note-ctrl')
const bodyParser = require('body-parser')

const router = express.Router()

router.post('/note', NoteCtrl.createNote)
router.put('/note/:id', NoteCtrl.updateNote)
router.delete('note/:id', NoteCtrl.deleteNote)
router.get('/note/:id', NoteCtrl.getNoteById)
router.get('/notes', NoteCtrl.getNotes)

module.exports = router
