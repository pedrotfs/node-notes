const notes = require("./notes.js")
const yargs = require("yargs")

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'note contents',
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
    
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: () => notes.listNotes()
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: false,
            type: "string"
        }
    },
    handler: (argv) => notes.readNote(argv.title)   
})

yargs.parse()