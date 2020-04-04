const fs = require('fs')

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
    
        save(notes)
    } else {
        console.log("duplicate title. note rejected")
    }
}

const removeNote = function(title) {
    return "remove"
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

const save = function(notes) {
    fs.writeFileSync("notes.json", JSON.stringify(notes))
}

module.exports = {
    addNote: addNote, 
    removeNote: removeNote, 
    listNotes: listNotes, 
    readNote: readNote
}