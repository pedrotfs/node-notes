const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicates = notes.filter(function (note) {
        return note.title === title
    })

    if(duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        log(true, "note saved.")
        save(notes)
    } else {
        log(false, "note already exists")
    }
}

const removeNote = function(title) {
    const notes = loadNotes()

    const removed = notes.filter(function (note) {
        return note.title !== title
    })

    if(notes.length !== removed.length) {
        save(removed)
        log(true, "note removed")
    } else {
        log(false, "note not found.")
    }
}

const listNotes = function() {
    return "list"
}

const readNote = function(title) {
    return "read"
}

const loadNotes = function() {
    try {
        return JSON.parse(fs.readFileSync("notes.json").toString())
    } catch(e) {
        fs.writeFileSync("notes.json", "")
        return []
    }
    
}

const log = function(success, message) {
    if(success) {
        console.log(chalk.green.italic(message))
    } else {
        console.log(chalk.red.bold(message))
    }
}

const save = function(notes) {
    fs.writeFileSync("notes.json", JSON.stringify(notes))
}

module.exports = {
    addNote: addNote, 
    removeNote: removeNote, 
    listNotes: listNotes, 
    readNote: readNote
}