const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicates = notes.filter((note) => note.title === title)

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

const removeNote = (title) => {
    const notes = loadNotes()
    const removed = notes.filter((note) => note.title !== title)

    if(notes.length !== removed.length) {
        save(removed)
        log(true, "note removed")
    } else {
        log(false, "note not found.")
    }
}

const listNotes = () => {
    const notes = loadNotes()
    log(true, "## Recorded Notes ##")
    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    return "read"
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.json").toString())
    } catch(e) {
        fs.writeFileSync("notes.json", "")
        return []
    }
    
}

const log = (success, message) => {
    if(success) {
        console.log(chalk.green.italic(message))
    } else {
        console.log(chalk.red.bold(message))
    }
}

const save = (notes) => fs.writeFileSync("notes.json", JSON.stringify(notes))

module.exports = {
    addNote: addNote, 
    removeNote: removeNote, 
    listNotes: listNotes, 
    readNote: readNote
}