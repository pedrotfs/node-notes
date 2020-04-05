const fs = require('fs')
const chalk = require('chalk')

//crud

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicate = notes.find((note) => note.title === title)

    if(!duplicate) {
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
    notes.forEach(note => console.log(chalk.inverse(note.title)))
}

const readNote = (title) => {
    const notes = loadNotes()
    if(title === undefined) {
        notes.forEach(note => printNote(note))
    } else {
        const note = notes.find((note) => note.title === title)
        if(note) {
            printNote(note)
        } else {
            log(false, "Note not found.")
        }
    }
    
}

//auxiliary methods

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

const printNote = (note) => {
    console.log(chalk.inverse(note.title))
    console.log("----")
    console.log(note.body)
    console.log("")
}

//export

module.exports = {
    addNote: addNote, 
    removeNote: removeNote, 
    listNotes: listNotes, 
    readNote: readNote
}